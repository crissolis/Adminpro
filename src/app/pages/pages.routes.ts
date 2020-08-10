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
		{ path: 'dashboard', component:  DashboardComponent },
        { path: 'progress', component: ProgressComponent },
		{ path: 'grafica1', component: Graficas1Component },
	    { path: 'account-settings', component: AccoutSettingsComponent },
		{ path: '', redirectTo:'dashboard',pathMatch:'full' },
	 ]
	  }
] ;

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PAGES_ROUTES { }