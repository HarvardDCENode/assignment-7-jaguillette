import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TimelineService } from "../timeline.service";

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
    private router: Router
  ) {}

  getTimeline(): void {
    const param: any = this.route.snapshot.paramMap.get("id");
    this.timelineService.getTimeline(param).subscribe((timeline) => {
      this.timeline = timeline;
    });
  }

  ngOnInit(): void {
    this.getTimeline();
  }
}
