import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
  /*providers: [LoggingService]*/
})
export class SuccessAlertComponent implements OnInit {
  // @Output() onMessage: EventEmitter<string> = new EventEmitter();
  @Output() onMessage: EventEmitter<boolean> = new EventEmitter();
  @Input() showMessage: boolean = true;

  /*private ls: LoggingService;
  constructor(ls: LoggingService) {
    this.ls = ls;
  }*/

  constructor(private ls: LoggingService) {}

  ngOnInit() {
    this.ls.logMessageArray('Questa è una stringa di prova')
      .subscribe(
        (value: number) => {
          console.log(value);
        },
        (error) => {},
        () => {}
      );
  }

  sendMessage() {
    // Mai istanziare un service manualmente!
    /*const log = new LoggingService();
    log.logMessage('Test');*/

    this.ls.logMessage('Test');
    const randomNumber: number = Math.floor(Math.random() * 1000) + 1;
    const value: boolean = randomNumber % 2 === 0 ? true : false;
    this.onMessage.emit(value);
  }

}
