import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import {FormsModule} from '@angular/forms';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// graficas
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

@NgModule({
  declarations: [
  DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent
   ],
   exports:[
     DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
   ],
   imports:[
   SharedModule,
   PAGES_ROUTES,
   FormsModule,
   ChartsModule,
   
   ]
   
})
export class PagesModule { }