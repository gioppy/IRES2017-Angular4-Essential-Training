import { Component, Input } from '@angular/core';

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
export class WarningAlertComponent {
  @Input() isHidden: boolean;
  @Input() alertMessage: string = 'This is a warning! Escape now!!!';
  redColor: string = '#ff0000';
}