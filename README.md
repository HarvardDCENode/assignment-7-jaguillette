# Timeline builder

This app is intended as a timeline builder. It allows a user to set up a timeline and add an arbitrary number of events. CRUD operations are possible through the interface on both timelines and individual events. This is supported by a backend timeline which allows for updating individual values.

The front end lives in the `client` folder and is an Angular app. The backend lives in the `server` folder and is an express app. Server-side deployment is managed on a Node js DigitalOcean server by pm2.

The timeline is set up to be able to be displayed in the `timeline-display` component using the [vis.js timeline](https://github.com/visjs/vis-timeline) library, but I wasn't able to set up the library as part of the angular front-end in time.
