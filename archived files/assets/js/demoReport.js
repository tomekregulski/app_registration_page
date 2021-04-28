var projectFormEl = $('#project-form');
var eventDateInput = $('#event-date');
var eventTimeInput = $('#event-time');
var eventLocationInput = $('#event-location');
var eventCampaignInput = $('#campaign');
var feedbackInput = $('#feedback')
var reportData = JSON.parse(localStorage.getItem("reportData")) || [];

projectFormEl.on('submit', handleProjectFormSubmit);

function handleProjectFormSubmit(event) {
  event.preventDefault();

  var eventDate = eventDateInput;
  var eventTime = eventTimeInput.val().trim();
  var eventLocation = eventLocationInput.val().trim();
  var eventCampaign = eventCampaignInput.val().trim();
  var eventFeedback = feedbackInput.val().trim();
  
  submitData(eventDate, eventTime, eventLocation, eventCampaign, eventFeedback);

  projectFormEl[0].reset();
};

function submitData(eventDate, eventTime, eventLocation, eventCampaign, eventFeedback) {
    
  var demoData = {
      name: `${eventCampaign} Demo @ ${eventLocation} on ${eventDate}`,
      date: eventDate,
      time: eventTime,
      venue: eventLocation,
      campaign: eventCampaign,
      feedback: eventFeedback,
  }

  console.log(demoData);
  reportData.push(demoData);
  localStorage.setItem("reportData", JSON.stringify(reportData));
};

$(function () {
  $('#event-date').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// possible to have google maps handle location??
// make campaign selector to trigger post-event questions

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