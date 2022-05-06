import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TimelinesComponent } from "./timelines/timelines.component";
import { OneTimelineComponent } from "./one-timeline/one-timeline.component";
import { OneTimelineEventComponent } from "./one-timeline-event/one-timeline-event.component";
import { TimelinedetailComponent } from "./timelinedetail/timelinedetail.component";
import { NewtimelineComponent } from "./newtimeline/newtimeline.component";
import { NewtimelineeventComponent } from "./newtimelineevent/newtimelineevent.component";

const routes: Routes = [
  { path: "", redirectTo: "/timelines", pathMatch: "full" },
  { path: "timelines", component: TimelinesComponent },
  { path: "timelines/:id", component: TimelinedetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    OneTimelineComponent,
    OneTimelineEventComponent,
    TimelinedetailComponent,
    NewtimelineComponent,
    NewtimelineeventComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
