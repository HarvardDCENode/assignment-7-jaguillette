import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TimelinesComponent } from "./timelines/timelines.component";
import { TimelineBriefComponent } from "./timeline-brief/timeline-brief.component";
import { TimelineEventDetailComponent } from "./timeline-event-detail/timeline-event-detail.component";
import { TimelineDetailComponent } from "./timeline-detail/timeline-detail.component";
import { NewtimelineComponent } from "./newtimeline/newtimeline.component";
import { NewtimelineeventComponent } from "./newtimelineevent/newtimelineevent.component";
import { TimelineDisplayComponent } from "./timeline-display/timeline-display.component";

const routes: Routes = [
  { path: "", redirectTo: "/timelines", pathMatch: "full" },
  { path: "timelines", component: TimelinesComponent },
  { path: "timelines/manage/:id", component: TimelineDetailComponent },
  { path: "timelines/display/:id", component: TimelineDisplayComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    TimelineBriefComponent,
    TimelineEventDetailComponent,
    TimelineDetailComponent,
    NewtimelineComponent,
    NewtimelineeventComponent,
    TimelineDisplayComponent,
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
