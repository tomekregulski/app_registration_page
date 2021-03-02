var demoDisplay = document.querySelector("#demos");
var container;
var row;
var eventName;
var date;
var duration;
var time;
var venue;
var campaign;

var demoArray = [
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
{
    name: "Demo-",
    date: "01/01/2021",
    time: "3:00 PM",
    venue: "Brooklyn WFM",
    campaign: "Saso",
    duration: "3:00"
},
]

console.log('hello');
console.log('HI');
createDemo();

function createDemo() {
    for (var i = 0; i < demoArray.length; i++) {
    // pulls question info from the array, creates span and button elements
        container = document.createElement('div');
        container.setAttribute('class', 'border');
        row = document.createElement('div');
        row.setAttribute('class', 'row');
        eventName = document.createElement('div');
        eventName.setAttribute("class", "col-3 text-center");
        // eventName.setAttribute("href", "./index.html");
        // eventName.innerHTML = demoArray[i].name + (i + 1);
        eventText = document.createElement('a');
        eventText.setAttribute("href", "../index.html");
        eventText.innerHTML = demoArray[i].name + (i + 1);
        date = document.createElement('div');
        date.setAttribute('class', 'col-2 text-center');
        date.textContent = demoArray[i].date;
        time = document.createElement('div');
        time.setAttribute('class', 'col-1 text-center');
        time.textContent = demoArray[i].time;
        venue = document.createElement('div');
        venue.setAttribute('class', 'col-3 text-center');
        venue.textContent = demoArray[i].venue;
        campaign = document.createElement('div');
        campaign.setAttribute("class", "col-2 text-center");
        campaign.textContent = demoArray[i].campaign;
        duration = document.createElement('span');
        duration.setAttribute("class", "col-1 text-center");
        duration.textContent = demoArray[i].duration;
        demoDisplay.appendChild(container);
        container.appendChild(row);
        row.appendChild(eventName);
        eventName.appendChild(eventText);
        row.appendChild(date);
        row.appendChild(time);
        row.appendChild(venue);
        row.appendChild(campaign);
        row.appendChild(duration);
    }
};