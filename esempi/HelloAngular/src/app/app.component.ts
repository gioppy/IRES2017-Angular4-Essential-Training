import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideMessage: boolean = true;

  constructor() {
    setTimeout(() => {
      this.title = 'From timeout';
      this.hideMessage = false;
    }, 5000);
  }
}
