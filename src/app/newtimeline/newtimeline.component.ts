import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TimelineService } from "../timeline.service";

@Component({
  selector: "app-newtimeline",
  templateUrl: "./newtimeline.component.html",
  styleUrls: ["./newtimeline.component.css"],
})
export class NewtimelineComponent implements OnInit {
  // When a new timeline is created, an event will be sent to the parent to
  // refresh its timelines
  @Output() newTimeline = new EventEmitter();

  // timeline object, bound to the form fields
  timeline: any = {
    title: '',
    description: '',
  };

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {}

  // it seems like using getter and setter methods makes Angular more happy
  // I based this code on the accepted answer to this stack overflow question:
  // https://stackoverflow.com/questions/61703602/typeerror-ctx-cart-is-undefined
  get timelineTitle() {
    return this.timeline && this.timeline.title ? this.timeline.title : "";
  }
  set timelineTitle(newTitle) {
    this.timeline.title = newTitle;
  }

  get timelineDescription() {
    return this.timeline && this.timeline.description
      ? this.timeline.description
      : "";
  }
  set timelineDescription(newDescription) {
    this.timeline.description = newDescription;
  }

  save(newtimelineForm: any): void {
    console.log("i did literally anything");
    console.log(newtimelineForm);
    const theNewTimeline = {
      title: newtimelineForm.form.value.title,
      description: newtimelineForm.form.value.description,
    }
    console.log(theNewTimeline);
    this.timelineService.createTimeline(theNewTimeline).subscribe((timeline) => {
      console.log(timeline);
      this.newTimeline.emit();
      newtimelineForm.reset();
    })
  }
}
