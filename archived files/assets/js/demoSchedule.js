var demoDatabase = JSON.parse(localStorage.getItem("demoDatabase")) || [];
var demoDisplayEl = $('#demo-display');

printDemos();

function printDemos() {
    console.log('hello');
    for (var i = 0; i < demoDatabase.length; i++) {
        var eventRowEl = $('<tr>');
    
        var eventNameTdEl = $('<td>').addClass('p-2').text(demoDatabase[i].name);
    
        var eventDate = $('<td>').addClass('p-2').text(demoDatabase[i].date);
    
        var eventTime = $('<td>').addClass('p-2').text(demoDatabase[i].time);
    
        var eventLocation = $('<td>').addClass('p-2').text(demoDatabase[i].venue);

        var eventCampaign = $('<td>').addClass('p-2').text(demoDatabase[i].campaign);
    
        var eventDuration = $('<td>').addClass('p-2').text(demoDatabase[i].duration);

        var deleteDemoBtn = $('<td>')
            .addClass('p-2 delete-project-btn text-center')
            .text('X');
        
        eventRowEl.append(
            eventNameTdEl,
            eventDate,
            eventTime,
            eventLocation,
            eventCampaign,
            eventDuration,
            // deleteDemoBtn
          );

        demoDisplayEl.append(eventRowEl);
    }
};