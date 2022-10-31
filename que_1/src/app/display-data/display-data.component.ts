import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  a:Number = 40;
  b:String = 'Kush Sheth'
  c:Date = new Date('11/15/2000')
  d:String = "M.sc IT"

  ngOnInit(): void {
  }

}
