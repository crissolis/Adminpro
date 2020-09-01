import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent} from './progress/progress.component';
import { Graficas1Component} from './graficas1/graficas1.component';
import { PagesComponent} from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

 const pagesRoutes: Routes = [
 { path: '', component: PagesComponent,
	 children:[
		{ path: 'dashboard', component:  DashboardComponent,data:{titulo:"Dashboard"} },
        { path: 'progress', component: ProgressComponent ,data:{titulo:"Progress"}},
		{ path: 'grafica1', component: Graficas1Component ,data:{titulo:"Graficas"}},
	    { path: 'account-settings', component: AccoutSettingsComponent,data:{titulo:"Configuración"} },
		{ path: '', redirectTo:'/dashboard',pathMatch:'full',data:{titulo:"Dashboard"} },
	 ]
	  }
] ;

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PAGES_ROUTES { }