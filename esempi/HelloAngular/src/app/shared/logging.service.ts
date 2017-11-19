import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { StringService } from './string.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { IMessage } from './message.model';

@Injectable()
export class LoggingService {
  constructor(
    private stringService: StringService,
    private http: HttpClient
  ) {}

  logMessage(msg: string) {
    console.log(`Send a message ${msg}`);
  }

  logMessageArray(msg: string): Observable<number> {
    const values = this.stringService.mySplit(msg, ' ');

    return Observable.from(values)
      .map((value: string) => value.length);
  }

  // Con HttpClientModule
  getMessages(): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>('http://localhost:3002/messages');
  }

  // Con HttpModule
  /*getMessages(): Observable<Array<IMessage>> {
    return this.http.get('http://localhost:3002/messages')
      .map((value) => value.json());
  }*/

}