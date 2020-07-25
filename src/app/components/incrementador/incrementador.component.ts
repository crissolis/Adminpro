import { Component, OnInit, Input, Output ,EventEmitter, ViewChild, ElementRef} from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

@ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

 @Input() porcentaje:number=50;
 @Input() leyenda:string='leyenda';

 @Output() cambioValor:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number)
  {
    
    if (this.porcentaje>= 100 && valor >0) {
      this.porcentaje=100;
      return;
    }
  
    if (this.porcentaje <=0 && valor <=0) {
      this.porcentaje=0;
      return;
    }

    this.porcentaje+=valor;
    this.cambioValor.emit(this.porcentaje);
  }

  onChange(nuevoValor:number ){
    // console.log(this.txtProgress);
// let elementHtml:any=document.getElementsByName('porcentaje')[0];

    if (nuevoValor>=100) {
      this.porcentaje=100;
    }else if(nuevoValor<=0){
      this.porcentaje=0;
    }else{
      this.porcentaje=nuevoValor;
    }
    this.txtProgress.nativeElement.value=Number(this.porcentaje); 
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }
}
