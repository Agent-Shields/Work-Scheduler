// get current date 
var currentDay = moment().local().format("dddd, MMMM Do");
console.log (currentDay);

// dynamically display current date
var currentDayDisplay = function(){
    $("#currentDay").text(currentDay)
}

// call function to display current date
currentDayDisplay();