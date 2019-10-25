import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/core/base-api';
import { WFMEvent } from '../models/event.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.get(`events/${id}`);
  }
}
