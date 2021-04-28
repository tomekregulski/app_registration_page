var reportData = JSON.parse(localStorage.getItem("reportData")) || [];
var dataDisplayEl = $('#data-display');

printDemos();

function printDemos() {
    console.log('hello');
    for (var i = 0; i < reportData.length; i++) {
        var dataRowEl = $('<tr>');
    
        var eventNameTdEl = $('<td>').addClass('p-2').text(reportData[i].name);
    
        var eventDate = $('<td>').addClass('p-2').text(reportData[i].date);
    
        var eventTime = $('<td>').addClass('p-2').text(reportData[i].time);
    
        var eventLocation = $('<td>').addClass('p-2').text(reportData[i].venue);

        var eventCampaign = $('<td>').addClass('p-2').text(reportData[i].campaign);
    
        var eventFeedback = $('<td>').addClass('p-2').text(reportData[i].feedback);

        var deleteDemoBtn = $('<td>')
            .addClass('p-2 delete-project-btn text-center')
            .text('X');
        
        dataRowEl.append(
            eventNameTdEl,
            eventDate,
            eventTime,
            eventLocation,
            eventCampaign,
            eventFeedback,
            // deleteDemoBtn
          );

        dataDisplayEl.append(dataRowEl);
    }
};