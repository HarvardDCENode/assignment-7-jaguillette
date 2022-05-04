import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';

@Component({
  // Timeline container component. Lists out timelines using subcomponent.
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css'],
  providers: [TimelineService],
})
export class TimelinesComponent implements OnInit {
  // This thing's job is to get all the timeline data and feed it to child components for display

  timelines:any = [];

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.listTimelines().subscribe((timelines) => {
      this.timelines = timelines;
    });
  }
}
