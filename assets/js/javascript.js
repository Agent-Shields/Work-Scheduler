// get current date 
var currentDay = moment().local().format("dddd, MMMM Do");
console.log (currentDay);

// get time slot comparison value
var comparisonTimeSlot = moment().local().format("hA");
console.log(comparisonTimeSlot);

// get time slot hour value
var hourOne = document.querySelector("#timeSlotOne").textContent
var hourTwo = document.querySelector("#timeSlotTwo").textContent
var hourThree = document.querySelector("#timeSlotThree").textContent
var hourFour = document.querySelector("#timeSlotFour").textContent
var hourFive = document.querySelector("#timeSlotFive").textContent
var hourSix = document.querySelector("#timeSlotSix").textContent
var hourSeven = document.querySelector("#timeSlotSeven").textContent
var hourEight = document.querySelector("#timeSlotEight").textContent
var hourNine = document.querySelector("#timeSlotNine").textContent


// create working hours array
var workingHours = [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven, hourEight, hourNine];

// loop through working hours 

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
