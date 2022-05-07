import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TimelineEventService } from "../timeline-event.service";

@Component({
  selector: "app-newtimelineevent",
  templateUrl: "./newtimelineevent.component.html",
  styleUrls: ["./newtimelineevent.component.css"],
})
export class NewtimelineeventComponent implements OnInit {
  // When a new timeline event is created, an event will be sent to the parent to
  // refresh its timelines
  @Output() newTimelineEevent = new EventEmitter();

  @Input() timelineId: any;

  timelineEvent: any;

  constructor(
    private timelineEventService: TimelineEventService,
    private route: ActivatedRoute
  ) {
    this.timelineEvent = {};
    this.timelineId = "I am the default";
  }

  get timelineEventTitle(): string {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.title
      : "";
  }
  set timelineEventTitle(newTitle: string) {
    this.timelineEvent.title = newTitle;
  }

  get timelineEventDescription() {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.description
      : "";
  }
  set timelineEventDescription(newDesc: string) {
    this.timelineEvent.description = newDesc;
  }

  get timelineEventYear(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.year
      : "";
  }
  set timelineEventYear(newYear: number) {
    this.timelineEvent.year = newYear;
  }

  get timelineEventMonth(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.month
      : "";
  }
  set timelineEventMonth(newMonth: number) {
    this.timelineEvent.month = newMonth;
  }

  get timelineEventDay(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.day
      : "";
  }
  set timelineEventDay(newDay: number) {
    this.timelineEvent.day = newDay;
  }

  get timelineEventHours(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.hours
      : "";
  }
  set timelineEventHours(newHours: number) {
    this.timelineEvent.hours = newHours;
  }

  get timelineEventMinutes(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.minutes
      : "";
  }
  set timelineEventMinutes(newMinutes: number) {
    this.timelineEvent.minutes = newMinutes;
  }

  get timelineEventSeconds(): number {
    return this.timelineEvent && this.timelineEvent.title
      ? this.timelineEvent.seconds
      : "";
  }
  set timelineEventSeconds(newSeconds: number) {
    this.timelineEvent.seconds = newSeconds;
  }

  get timelineEventTimeline(): string {
    return this.timelineEvent && this.timelineEvent.timeline
      ? this.timelineEvent.timeline
      : "";
  }
  set timelineEventTimeline(newTimeline: string) {
    this.timelineEvent.timeline = newTimeline;
  }

  save(newTimelineEventForm: any): void {
    console.log(newTimelineEventForm.form.value);
    const theNewTimelineEvent = {
      title: newTimelineEventForm.form.value.title,
      description: newTimelineEventForm.form.value.description,
      year: newTimelineEventForm.form.value.year,
      month: newTimelineEventForm.form.value.month,
      day: newTimelineEventForm.form.value.day,
      hours: newTimelineEventForm.form.value.hours,
      minutes: newTimelineEventForm.form.value.minutes,
      seconds: newTimelineEventForm.form.value.seconds,
      timeline: this.route.snapshot.paramMap.get("id"),
    };
    console.log(theNewTimelineEvent);
    this.timelineEventService
      .createTimelineEvent(theNewTimelineEvent)
      .subscribe((timelineEvent) => {
        console.log(timelineEvent);
        this.newTimelineEevent.emit();
        newTimelineEventForm.reset();
        location.reload();
      });
  }

  ngOnInit(): void {}
}
