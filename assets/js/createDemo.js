var projectFormEl = $('#project-form');
var eventDateInput = $('#event-date');
var eventTimeInput = $('#event-time');
var eventLocationInput = $('#event-location');
var eventCampaignInput = $('#campaign');
var eventDurationInput = $('#event-duration');
var baNameInput = $('#brand-ambassador')
var demoDatabase = JSON.parse(localStorage.getItem("demoDatabase")) || [];

projectFormEl.on('submit', handleProjectFormSubmit);

storage.clear();

function handleProjectFormSubmit(event) {
  event.preventDefault();

  var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!()?[]`~;:!@#$%^&*+=";
  var demoId = "";
  for ( var i = 0; i < 7; i++ ) {
      demoId += charSet[Math.floor(Math.random() * 7)];
    }
  var eventDate = eventDateInput;
  var eventTime = eventTimeInput.val().trim();
  var eventLocation = eventLocationInput.val().trim();
  var eventCampaign = eventCampaignInput.val().trim();
  var eventDuration = eventDurationInput;
  var baName = baNameInput.val().trim();
  
  console.log(demoId);
  createDemo(demoId, eventDate, eventTime, eventLocation, eventCampaign, eventDuration, baName);

  projectFormEl[0].reset();
};

function createDemo(demoId, eventDate, eventTime, eventLocation, eventCampaign, eventDuration, baName) {
    
  var newDemo = {
      id: demoId,
      name: `${eventCampaign} Demo @ ${eventLocation}`,
      date: eventDate,
      time: eventTime,
      venue: eventLocation,
      campaign: eventCampaign,
      duration: eventDuration,
      ba: baName,
  }

  console.log(newDemo);
  demoDatabase.push(newDemo);
  localStorage.setItem("demoDatabase", JSON.stringify(demoDatabase));
};

$(function () {
  $('#event-date').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

$(function () {
  var locationNames = [
    'Whole Foods Market - Cherry Hill',
    'Whole Foods Market - South Street',
    'Whole Foods Market - Philly Center City',
    'Whole Foods Market - Wynnewood',
    'Whole Foods Market - Silver Spring',
    'Whole Foods Market - Newtown',
    'Whole Foods Market - Bethesda',
    'Whole Foods Market - Devon',
    'Whole Foods Market - Kentlands',
    'Whole Foods Market - H Street',
    'Whole Foods Market - Old Town',
    'Whole Foods Market - P Street',
    'Whole Foods Market - Pentagon City',
    'Whole Foods Market - South Capitol Hill',
    'Whole Foods Market - Tenleytown',
    'Whole Foods Market - Friendship Heights',
    'Whole Foods Market - Rockville',
    'Whole Foods Market - Riverdale',
    'Whole Foods Market - Florida Ave',
    'Whole Foods Market - Foggy Bottom',
    'Whole Foods Market - Arlington VA',
    'Whole Foods Market - Springfield',
    'Whole Foods Market - Fair Lakes',
    'Whole Foods Market - Ashburn',
    'Whole Foods Market - Spring House',
    'Whole Foods Market - Jenkintown',
    'Whole Foods Market - Reston',
    'Whole Foods Market - Tysons',
    'Whole Foods Market - Tysons Corner',
    'Whole Foods Market - Vienna',
    'Whole Foods Market - Inner Harbor',
    'Whole Foods Market - Columbia - Maryland',
    'Whole Foods Market - Mount Washington',
    'Whole Foods Market - South Hills',
    'Whole Foods Market - Pittsburgh',
    'Whole Foods Market - Wexford',
  ];
  $('#event-location').autocomplete({
    source: locationNames,
  });
});

$(function () {
  var baNames = [
    'BA-1',
    'BA-2',
    'BA-3',
    'BA-4',
  ];
  $('#brand-ambassador').autocomplete({
    source: baNames,
  });
});