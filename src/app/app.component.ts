import { Component } from '@angular/core';
import { SettingService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';
  constructor(ajustesService:SettingService){

  }
}
