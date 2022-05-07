import { Component, Input, OnInit } from "@angular/core";
import { TimelineEventService } from "../timeline-event.service";

interface Editing {
  title: boolean;
  description: boolean;
  [key: string]: boolean;
}

@Component({
  // Component for a single timeline event
  // Doesn't render the event, but useful for admin
  selector: "app-one-timeline-event",
  templateUrl: "./timeline-event-detail.component.html",
  styleUrls: ["./timeline-event-detail.component.css"],
})
export class TimelineEventDetailComponent implements OnInit {
  @Input() timelineEvent: any;

  editing: Editing = {
    title: false,
    description: false,
  };

  constructor(private timelineEventService: TimelineEventService) {}

  setEditMode(key: string, mode: boolean): void {
    this.editing[key] = mode;
  }

  deleteTimelineEvent(): void {
    if (
      confirm(
        `Are you sure that you want to delete the timeline event "${this.timelineEvent.title}?"`
      )
    ) {
      console.log(`deleting ${this.timelineEvent._id}`);
      this.timelineEventService.deleteTimeline(this.timelineEvent._id).subscribe((result:any) => {
        alert(`Timeline event "${this.timelineEvent.title}" has been deleted`);
        location.reload();
      })
    }
  }

  ngOnInit(): void {}
}
