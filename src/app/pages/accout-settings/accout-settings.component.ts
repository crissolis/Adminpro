import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public ajustesService:SettingService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string){ 
  this.ajustesService.aplicarTema(tema);
}

colocarCheck(){
  let selectores:any=document.getElementsByClassName('selector');
 let tema=this.ajustesService.ajustes.tema;
  for (let ref of selectores) {
    if (ref.getAttribute('data-theme')===tema) {
      ref.classList.add('working');
      
    } else{
      ref.classList.remove('working');
    } 
  }
}
}
