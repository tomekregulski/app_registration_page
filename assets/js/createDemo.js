var projectFormEl = $('#project-form');
var eventDateInput = $('#event-date');
var eventTimeInput = $('#event-time');
var eventLocationInput = $('#event-location');
var eventCampaignInput = $('#campaign');
var eventDurationInput = $('#event-duration');
var demoDatabase = JSON.parse(localStorage.getItem("demos")) || [];

projectFormEl.on('submit', handleProjectFormSubmit);

function handleProjectFormSubmit(event) {
    event.preventDefault();
  
    var eventDate = eventDateInput;
    var eventTime = eventTimeInput.val().trim();
    var eventLocation = eventLocationInput.val().trim();
    var eventCampaign = eventCampaignInput.val().trim();
    var eventDuration = eventDurationInput;
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!()?[]`~;:!@#$%^&*+=";
    var demoId = "";
    for ( var i = 0; i < 7; i++ ) {
        demoId += charSet[Math.floor(Math.random() * 7)];
      }
    console.log(demoId);
    createDemo(demoId, eventDate, eventTime, eventLocation, eventCampaign, eventDuration);
  
    projectFormEl[0].reset();
  };

  function createDemo(demoId, eventDate, eventTime, eventLocation, eventCampaign, eventDuration) {
    
    var newDemo = {
        id: demoId,
        name: `${eventCampaign} Demo @ ${eventLocation}`,
        date: eventDate,
        time: eventTime,
        venue: eventLocation,
        campaign: eventCampaign,
        duration: eventDuration
    }

    console.log(newDemo);
    demoDatabase.push(newDemo);
    localStorage.setItem("demoDatabase", JSON.stringify(demoDatabase));
  };

  