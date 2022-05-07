import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimelineEventService {
  private apiurl = environment.apiurl

  constructor(private http: HttpClient) { }

  createTimelineEvent(data:any) {
    // post data to create a new timeline event
    return this.http.post(`${this.apiurl}api/tlEvents`, data);
  }

  listTimelineEvents() {
    // list all timeline events
    return this.http.get(`${this.apiurl}api/tlEvents`);
  }

  getTimeline(id:string) {
    // get a single timeline event by id
    return this.http.get(`${this.apiurl}api/tlEvents/${id}`);
  }

  updateTimeline(id:string, data:any) {
    // update a timeline event by ID with provided data
    return this.http.put(`${this.apiurl}api/tlEvents/${id}`, data);
  }

  deleteTimeline(id:string) {
    // delete timeline event by id
    return this.http.delete(`${this.apiurl}api/tlEvents/${id}`);
  }
}
