import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { FishComponent } from './components/fish/fish.component';

// Application routes and correponding children routes
const app_routes: Routes = [
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
    { path: 'financials', component: FinancialsComponent},
    { path: 'fish', component: FishComponent},
	{ path: 'about', component: AboutComponent},
	{path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules, enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
