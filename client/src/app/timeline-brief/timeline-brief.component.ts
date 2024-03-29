import { Component, Input, OnInit } from '@angular/core';

@Component({
  // Single timeline display component. Lists out timeline events in separate sub-component.
  // Not used in rendering a timeline, but useful for admin work.
  selector: 'app-timeline-brief',
  templateUrl: './timeline-brief.component.html',
  styleUrls: ['./timeline-brief.component.css'],
})
export class TimelineBriefComponent implements OnInit {
  // The job of this component is to display one timeline

  @Input() timeline: any;

  constructor() {}

  ngOnInit(): void {}
}
