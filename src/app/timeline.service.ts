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
    return this.http.post(`${this.apiurl}api/timelines`, data);
  }

  listTimelines():Observable<any[]> {
    // List all timelines in database
    return this.http.get<any[]>(`${this.apiurl}api/timelines`);
  }

  getTimeline(id: string) {
    // Get a single timeline based on ID
    return this.http.get(`${this.apiurl}api/timelines/${id}`);
  }

  updateTimeline(id:string, data:any) {
    return this.http.put(`${this.apiurl}api/timelines/${id}`, data);
  }

  deleteTimeline(id:string) {
    return this.http.delete(`${this.apiurl}api/timelines/${id}`);
  }
}
