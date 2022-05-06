# Timeline app

This app is intended to be used to create timelines. There's no front end output right now, so it just stores some metadata about timelines, as well as the events associated with them. I could make it mechanically simpler by using native datetime storage and form elements, but I'm interested in being able to preserve the distinction between "A single date in the year 1900, no further info" from "Precisely midnight on January 1st, 1900", so I've got all of the date components separated out on timeline elements.

The tests for the APIs are located and described on the homepage for the app.