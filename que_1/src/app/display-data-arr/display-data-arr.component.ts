import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-arr',
  templateUrl: './display-data-arr.component.html',
  styleUrls: ['./display-data-arr.component.css']
})
export class DisplayDataArrComponent implements OnInit {

  constructor() { }
  arr = [45, 18, 7, 33, 10]
  ngOnInit(): void {
  }

}
