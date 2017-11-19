import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { LoggingService } from './shared/logging.service';
import { StringService } from './shared/string.service';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent
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
