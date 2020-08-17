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

  constructor() { 
	  
	  
  }

  ngOnInit() {
	  this.buildFinancialsChart()
	  this.buildIncomeChart()
	  this.buildFishChart()
  }

  buildFinancialsChart(){
	this.financialSpreadChartOptions = {
		series: [25,25,30,10,10],
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
	  };
  }

  buildIncomeChart(){
	this.incomeChartOptions = {
		series: [
		  {
			name: "Average Daily Income 2020",
			data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
			"1/1",
			"1/2",
			"1/3",
			"1/4",
			"1/5",
			"1/6",
			"1/7",
			"1/8",
			"1/9"
		  ]
		}
	  };
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
}
