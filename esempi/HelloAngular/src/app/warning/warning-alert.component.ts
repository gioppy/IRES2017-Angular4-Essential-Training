import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-warning-alert',
  template: `<p class="alter-text" [hidden]="isHidden" [style.color]="redColor">{{ alertMessage }}</p>
  <img [src]="" [alt]="">`,
  styles: [`
    p{
      background-color: indianred;
      border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {
  @Input() isHidden: boolean;
  @Input() alertMessage: string = 'This is a warning! Escape now!!!';
  redColor: string = '#ff0000';

  constructor(private ls: LoggingService) {}

  ngOnInit() {
    this.ls.logMessageArray('Other string from other components')
      .subscribe(
        (values: number) => {
          console.log(values);
        }
      )
  }
}