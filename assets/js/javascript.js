// get current date 
var currentDay = moment().local().format("dddd, MMMM Do");
console.log (currentDay);

// create working hours array
var workingHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

// loop through working hours to create elements dynamically

for (i = 0; i < workingHours.length; i++) {
    //testing if loop is incrementing properly
    console.log(workingHours[i]);
}

// dynamically display current date
var currentDayDisplay = function(){
    $("#currentDay").text(currentDay)
}

// call function to display current date
currentDayDisplay();
