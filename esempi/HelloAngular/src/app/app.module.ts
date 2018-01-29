import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { LoggingService } from './shared/logging.service';
import { StringService } from './shared/string.service';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule
    HttpClientModule
  ],
  providers: [LoggingService, StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
