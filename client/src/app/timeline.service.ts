import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  // This class provides an interface to the API that provides timeline data.
  private apiurl = environment.apiurl;

  constructor(private http: HttpClient) {}

  createTimeline(data:any) {
    // post data to create a new timeline
    return this.http.post(`${this.apiurl}api/timelines`, data);
  }

  listTimelines():Observable<any[]> {
    // list all timelines
    return this.http.get<any[]>(`${this.apiurl}api/timelines`);
  }

  getTimeline(id: string) {
    // get a single timeline by id
    return this.http.get(`${this.apiurl}api/timelines/${id}`);
  }

  updateTimeline(id:string, data:any) {
    // update a timeline by ID with provided data
    return this.http.put(`${this.apiurl}api/timelines/${id}`, data);
  }

  deleteTimeline(id:string) {
    // delete timeline by id
    return this.http.delete(`${this.apiurl}api/timelines/${id}`);
  }
}
