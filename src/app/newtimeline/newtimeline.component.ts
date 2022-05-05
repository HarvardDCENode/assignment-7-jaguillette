import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-newtimeline',
  templateUrl: './newtimeline.component.html',
  styleUrls: ['./newtimeline.component.css']
})
export class NewtimelineComponent implements OnInit {
  // When a new timeline is created, an event will be sent to the parent to
  // refresh its timelines
  @Output() newPhoto = new EventEmitter;

  // timeline object, bound to the form fields
  timeline:any;

  constructor( private timelineService: TimelineService ) { }

  ngOnInit(): void {
  }

  save(newtimelineForm:any):void {
    console.log(newtimelineForm);
  }

}
