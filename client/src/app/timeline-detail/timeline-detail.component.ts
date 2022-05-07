import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TimelineService } from "../timeline.service";

@Component({
  selector: "app-timelinedetail",
  templateUrl: "./timeline-detail.component.html",
  styleUrls: ["./timeline-detail.component.css"],
})
export class TimelineDetailComponent implements OnInit {
  timeline: any;
  editing:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timelineService: TimelineService
  ) {}

  setEditMode(mode:boolean):void {
    this.editing = mode;
  }

  getTimeline(): void {
    const param: any = this.route.snapshot.paramMap.get("id");
    this.timelineService.getTimeline(param).subscribe((timeline) => {
      this.timeline = timeline;
    });
  }

  updateTimeline(obj: any): void {
    this.timeline.title = obj.titleField;
    this.timeline.description = obj.descField;
    this.timelineService
      .updateTimeline(this.timeline._id, this.timeline)
      .subscribe(() => {
        location.reload();
      });
  }

  deleteTimeline() {
    if (confirm(`Are you sure you want to delete ${this.timeline.title}?`)) {
      console.log(`deleting ${this.timeline._id}`);
      this.timelineService
        .deleteTimeline(this.timeline._id)
        .subscribe((result: any) => {
          alert(`Timeline ${this.timeline.title} has been deleted`);
          this.router.navigate(["/timelines"]);
        });
    }
  }

  ngOnInit(): void {
    this.getTimeline();
  }
}
