import { Component, Input, OnInit } from '@angular/core';

@Component({
  // Single timeline display component. Lists out timeline events in separate sub-component.
  // Not used in rendering a timeline, but useful for admin work.
  selector: 'app-one-timeline',
  templateUrl: './one-timeline.component.html',
  styleUrls: ['./one-timeline.component.css'],
})
export class OneTimelineComponent implements OnInit {
  // The job of this component is to display one timeline

  @Input() oneTimeline: any;

  constructor() {}

  ngOnInit(): void {}
}
