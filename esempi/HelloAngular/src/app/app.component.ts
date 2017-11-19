import { Component } from '@angular/core';
import { LoggingService } from './shared/logging.service';
import { IMessage } from './shared/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideMessage: boolean = true;
  showSuccessMessage: boolean = true;
  elements: number[] = [1,2,3,4,5,6,7,8,9,10];

  messages: Array<IMessage>;

  constructor(private loggingService: LoggingService) {
    setTimeout(() => {
      this.title = 'From timeout';
      this.hideMessage = false;
    }, 5000);

    this.loggingService.getMessages()
      .subscribe(
        (value: Array<IMessage>) => {
          this.messages = value;
        }
      );
  }

  handleMessage(value: boolean) {
    this.showSuccessMessage = value;
  }
}
