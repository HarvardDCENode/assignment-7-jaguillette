import { Component, Input, OnInit } from '@angular/core';
import { TimelineEventService } from '../timeline-event.service';

@Component({
  selector: 'app-timeline-event-field',
  templateUrl: './timeline-event-field.component.html',
  styleUrls: ['./timeline-event-field.component.css']
})
export class TimelineEventFieldComponent implements OnInit {
  @Input() timelineEvent: any;
  @Input() field: string;
  editing = false;
  
  constructor(private timelineEventService: TimelineEventService) {
    this.field = 'default';
  }

  setEditMode(mode:boolean):void {
    this.editing = mode;
  }

  updateTimelineEvent(obj: any): void {
    console.log(obj);
    this.timelineEventService
      .updateTimeline(this.timelineEvent._id, obj)
      .subscribe(() => {
        location.reload();
      });
  }

  ngOnInit(): void {
  }

}
