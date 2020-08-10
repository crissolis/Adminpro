import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULOS
import { PagesModule } from './pages/pages.module';
// rutas
import { AppRoutingModule } from './app-routing.module';
// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// temporal
import { FormsModule } from '@angular/forms';
// servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    RegisterComponent,
    // GraficoDonaComponent,
    // IncrementadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       PagesModule,
       FormsModule,
       ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
