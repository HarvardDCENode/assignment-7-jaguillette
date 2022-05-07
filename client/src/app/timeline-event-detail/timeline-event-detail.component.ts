import { Component, Input, OnInit } from '@angular/core';

@Component({
  // Component for a single timeline event
  // Doesn't render the event, but useful for admin
  selector: 'app-one-timeline-event',
  templateUrl: './timeline-event-detail.component.html',
  styleUrls: ['./timeline-event-detail.component.css'],
})
export class TimelineEventDetailComponent implements OnInit {
  @Input() oneTimelineEvent: any;

  constructor() {}

  ngOnInit(): void {}
}
