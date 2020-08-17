import { Component, OnInit, ViewChild } from '@angular/core';
import {
	ChartComponent,
	ApexNonAxisChartSeries,
	ApexResponsive,
	ApexChart,
	ApexTheme,
	ApexTitleSubtitle,
  	ApexAxisChartSeries,
  	ApexXAxis,
  	ApexDataLabels,
  	ApexStroke,
	ApexPlotOptions,
	ApexYAxis,
	ApexLegend,
	ApexGrid
  } from "ng-apexcharts";
import { DataService } from 'src/app/services/data.service';
import { DailyFinancial } from 'src/app/interfaces';
import { ThrowStmt } from '@angular/compiler';


  export type PieChartOptions = {
	series: ApexNonAxisChartSeries;
	chart: ApexChart;
	responsive: ApexResponsive[];
	labels: any;
	theme: ApexTheme;
	title: ApexTitleSubtitle;
  };

  export type LineChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	dataLabels: ApexDataLabels;
	grid: ApexGrid;
	stroke: ApexStroke;
	title: ApexTitleSubtitle;
  };

  
  export type BarChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	yaxis: ApexYAxis;
	xaxis: ApexXAxis;
	grid: ApexGrid;
	colors: string[];
	legend: ApexLegend;
  };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	@ViewChild("financialSpreadChart", {static: false}) financialSpreadChart: ChartComponent;
	@ViewChild("averageIncomeChart", {static: false}) averageIncomeChart: ChartComponent;
	@ViewChild("fishDistributionChart", {static: false}) fishDistributionChart: ChartComponent;

	public financialSpreadChartOptions: Partial<PieChartOptions> = {};
	public incomeChartOptions: Partial<LineChartOptions> = {};
	public fishChartOptions: Partial<BarChartOptions> = {};

	dailyFinancials: DailyFinancial[] = [];
	doneLoading : boolean = false
	
  constructor(private dataService: DataService,) { 
	  
	  
  }

  ngOnInit() {
	  this.getFinancials()

  }

  buildFinancialsChart(){
	this.financialSpreadChartOptions = {
		series: [],
		chart: {
			width: "100%",
			type: "pie"
		},
		labels:[
			"Ticket Sales",
			"Events",
			"Concessions",
			"Research Funding",
			"Donations"
		],
		theme: {
			monochrome:{
				enabled: true
			}
		},
		title: {
			text: "Financial Distribution"
		},
		responsive: [
		  {
			breakpoint: 480,
			options: {
			  chart: {
				width: 200
			  },
			  legend: {
				position: "bottom"
			  }
			}
		  }
		]
	  }
	  
	 let spread = this.getFinancialSpread(this.dailyFinancials)
	 this.financialSpreadChartOptions.series = spread
  }

  buildIncomeChart(){
	this.incomeChartOptions = {
		series: [
		  {
			name: "Average Daily Income 2020",
			data: []
		  }
		],
		chart: {
		  height: 350,
		  type: "line",
		  zoom: {
			enabled: false
		  }
		},
		dataLabels: {
		  enabled: false
		},
		stroke: {
		  curve: "straight"
		},
		title: {
		  text: "Aquarium Income in USD by day",
		  align: "left"
		},
		grid: {
		  row: {
			colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
			opacity: 0.5
		  }
		},
		xaxis: {
		  categories: [
		  ]
		}
	  };

	  let incomeArray = []
	  this.dailyFinancials.forEach(day => {
		  incomeArray.push(this.sumOfDay(day))
		  this.incomeChartOptions.xaxis.categories.push(day.id)
	  });
	  this.incomeChartOptions.series[0].data = incomeArray


  }
  buildFishChart(){
	this.fishChartOptions = {
		series: [
		  {
			name: "Fish Distribution",
			data: [21, 22, 10, 28, 16, 21, 13, 30]
		  }
		],
		chart: {
		  height: 350,
		  type: "bar",
		  events: {
			click: function(chart, w, e) {
			  // console.log(chart, w, e)
			}
		  }
		},
		colors: [
		  "#2196F3",
		  "#1976D2",
		  "#0097A7",
		  "#000000",
		  "#64FFDA",
		  "#BCAAA4",
		  "#558B2F",
		  "#536DFE"
		],
		plotOptions: {
		  bar: {
			columnWidth: "45%",
			distributed: true
		  }
		},
		dataLabels: {
		  enabled: false
		},
		legend: {
		  show: false
		},
		grid: {
		  show: false
		},
		xaxis: {
		  categories: [
			["Salt Water"],
			["Fresh Water"],
			["Aquatic Mammal"],
			["Deep Sea"],
			["Petting Zoo"],
			["Artic Land Animals"],
			["Amphibians"],
			["Special Event Animals"]
		  ],
		  labels: {
			style: {
			  colors: [
				"#2196F3",
				"#1976D2",
				"#0097A7",
				"#000000",
				"#64FFDA",
				"#BCAAA4",
				"#558B2F",
				"#536DFE"
			  ],
			  fontSize: "12px"
			}
		  }
		}
	  };
  }

  getFinancials(){
	this.dataService.getAllFinancialsEndpoint().subscribe(result => {
		this.dailyFinancials = []
		result.forEach(element => {
			element.data.id = element.id
			this.dailyFinancials.push(element.data)
		});
		this.buildFinancialsChart()
		this.buildIncomeChart()
		this.buildFishChart()
	})


}
	sumOfDay(day : DailyFinancial) : number {
		let sum = 0
		sum += day.ticketSales;
		sum += day.eventSales;
		sum += day.concessionSales;
		sum += day.researchFunding;
		sum += day.donationFunding;
		return sum

	}

	getFinancialSpread(days: DailyFinancial[]) : number[] {
		let ticketSum = 0;
		let eventSum = 0;
		let concessionSum = 0;
		let researchSum = 0;
		let donationSum = 0;
	
		days.forEach(element => {
			ticketSum += element.ticketSales
		});
		days.forEach(element => {
			eventSum += element.eventSales
		});
		days.forEach(element => {
			concessionSum += element.concessionSales
		});
		days.forEach(element => {
			researchSum += element.researchFunding
		});
		days.forEach(element => {
			donationSum += element.donationFunding
		});

		return [ticketSum,eventSum,concessionSum,researchSum,donationSum]
	}
}
