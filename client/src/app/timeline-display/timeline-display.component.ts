import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TimelineService } from "../timeline.service";
import { Timeline } from 'vis-timeline';
import { DataSet } from "vis-data";

@Component({
  selector: "app-timeline-display",
  templateUrl: "./timeline-display.component.html",
  styleUrls: ["./timeline-display.component.css"],
  providers: [TimelineService],
})
export class TimelineDisplayComponent implements OnInit {
  timeline: any;

  constructor(
    private timelineService: TimelineService,
    private route: ActivatedRoute,
    private router: Router,
    private visTimeline: Timeline,
  ) {}

  getTimeline(): void {
    const param: any = this.route.snapshot.paramMap.get("id");
    this.timelineService.getTimeline(param).subscribe((timeline) => {
      this.timeline = timeline;
    });
  }

  ngOnInit(): void {
    this.getTimeline();
    let data = new DataSet([
      {id: 1, content: 'item 1', start: '2014-04-20'},
      {id: 2, content: 'item 2', start: '2014-04-14'}
    ]);
    this.visTimeline
  }
}
