import agenda from "/js/schedule.js";
//Scheduler
function checkDate(agendaItem) {
  var currentTime = new Date();
   return currentTime.getTime() > agendaItem.from && currentTime.getTime() < agendaItem.to;
}

function checkAgenda() {
  currentEvent = agenda.filter(checkDate);
  var previousElement = document.querySelector('.current');
  previousElement ? previousElement.classList.remove('current') : null;

  if (currentEvent[0]) {
    var currentEventElement = document.querySelector('#' + currentEvent[0].eventId);
    console.log(currentEventElement);
    if (currentEventElement) {
      currentEventElement.classList.add('current');
    }
  }
}

setInterval(checkAgenda, 10000);
