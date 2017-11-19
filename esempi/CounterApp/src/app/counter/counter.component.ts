import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  viewDetails: boolean = true;
  // log: number[] = [];
  log: Array<Date> = [];

  constructor() { }

  ngOnInit() {
  }

  showHideMessage(date: Date) {
    this.viewDetails = !this.viewDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(date);
  }

}
