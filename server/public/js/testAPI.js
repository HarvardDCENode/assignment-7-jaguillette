// wrap in IIFE to control scope
(function () {
  const baseURL = "http://cscie31.jeremyguillette.com:8080";

  function testTimelineAPI() {
    // list
    callAPI("GET", "/api/timelines", null, null)
      .then((list) => {
        document.getElementById("list-timeline-results").innerHTML =
          JSON.stringify(list, null, "\t");
        return list[0]._id;
      })
      // get single
      .then((timelineId) => {
        callAPI("GET", `/api/timelines/${timelineId}`, null, null).then(
          (timelineDetails) => {
            document.getElementById("get-one-timeline-results").innerHTML =
              JSON.stringify(timelineDetails, null, "\t");
            // Create
            let data = {
              title: "this is a test timeline",
              description: "here is a description. delete me.",
            };
            callAPI("POST", "/api/timelines", null, data).then(
              (newTimeline) => {
                document.getElementById("create-timeline-results").innerHTML =
                  JSON.stringify(newTimeline, null, "\t");
                let data = {
                  description:
                    "the description has changed, and the behavior shows it",
                };
                callAPI(
                  "PUT",
                  `/api/timelines/${newTimeline._id}`,
                  null,
                  data
                ).then((updatedTimeline) => {
                  document.getElementById("update-timeline-results").innerHTML =
                    JSON.stringify(updatedTimeline, null, "\t");
                  callAPI(
                    "DELETE",
                    `/api/timelines/${updatedTimeline._id}`,
                    null,
                    null
                  ).then((deletedTimeline) => {
                    document.getElementById(
                      "delete-timeline-results"
                    ).innerHTML = JSON.stringify(deletedTimeline, null, "\t");
                  });
                });
              }
            );
          }
        );
      });
  }

  function testTimelineEventAPI() {
    // list
    callAPI("GET", "/api/tlEvents", null, null)
      .then((list) => {
        document.getElementById("list-timeline-event-results").innerHTML =
          JSON.stringify(list, null, "\t");
        return list[0]._id;
      })
      // get single
      .then((timelineId) => {
        callAPI("GET", `/api/tlEvents/${timelineId}`, null, null).then(
          (timelineDetails) => {
            document.getElementById(
              "get-one-timeline-event-results"
            ).innerHTML = JSON.stringify(timelineDetails, null, "\t");
            // Create
            let data = {
              title: "Mad Max Fury Road",
              description: "This movie, released in 2015, was just okay.",
              year: 2015,
              month: 4,
              day: 15,
              timeline: "6240d26d4e1354fa76fafa21",
            };
            callAPI("POST", "/api/tlEvents", null, data).then((newTimeline) => {
              document.getElementById(
                "create-timeline-event-results"
              ).innerHTML = JSON.stringify(newTimeline, null, "\t");
              let data = {
                description:
                  "This movie, released in 2015, was perfect, the true apotheosis of film",
              };
              callAPI(
                "PUT",
                `/api/tlEvents/${newTimeline._id}`,
                null,
                data
              ).then((updatedTimeline) => {
                document.getElementById(
                  "update-timeline-event-results"
                ).innerHTML = JSON.stringify(updatedTimeline, null, "\t");
                callAPI(
                  "DELETE",
                  `/api/tlEvents/${updatedTimeline._id}`,
                  null,
                  null
                ).then((deletedTimeline) => {
                  document.getElementById(
                    "delete-timeline-event-results"
                  ).innerHTML = JSON.stringify(deletedTimeline, null, "\t");
                });
              });
            });
          }
        );
      });
  }

  async function callAPI(method, uri, params, body) {
    jsonMimeType = {
      "Content-type": "application/json",
    };
    try {
      /*  Set up our fetch.
       *   'body' to be included only when method is POST
       *   If 'PUT', we need to be sure the mimetype is set to json
       *      (so bodyparser.json() will deal with it) and the body
       *      will need to be stringified.
       *   '...' syntax is the ES6 spread operator.
       *      It assigns new properties to an object, and in this case
       *      lets us use a conditional to create, or not create, a property
       *      on the object. (an empty 'body' property will cause an error
       *      on a GET request!)
       */
      var response = await fetch(baseURL + uri, {
        method: method, // GET, POST, PUT, DELETE, etc.
        ...(method == "PUT" || method == "POST"
          ? { headers: jsonMimeType, body: JSON.stringify(body) }
          : {}),
      });
      return response.json(); // parses response to JSON
    } catch (err) {
      console.error(err);
      return "{'status':'error'}";
    }
  }

  // Calls our test function when we click the button
  //  afer validating that there's a file selected.
  /* document.querySelector("#testme").addEventListener("click", () => {
    testAPIs();
  }); */
  document.querySelector("#test-timelines").addEventListener("click", () => {
    testTimelineAPI();
  });
  document.querySelector("#test-tlEvents").addEventListener("click", () => {
    testTimelineEventAPI();
  });
})();
