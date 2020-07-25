import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje :number=50;
  porcentaje1 :number=50;

  
  constructor() { }

  ngOnInit() {
  }

  // actulizar(event:number){
  //   this.porcentaje=event;
  // }

}
