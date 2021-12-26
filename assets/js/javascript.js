// get current date 
var currentDay = moment().local().format("dddd, MMMM Do");
console.log (currentDay);

// get time slot comparison value
var comparisonTimeSlot = moment().local().format("hA");
console.log(comparisonTimeSlot);

// get time slot hour value
var hourOne = moment().hour(9).format("hA");
var hourTwo = moment().hour(10).format("hA");
var hourThree = moment().hour(11).format("hA");
var hourFour = moment().hour(12).format("hA");
var hourFive = moment().hour(13).format("hA");
var hourSix = moment().hour(14).format("hA");
var hourSeven = moment().hour(15).format("hA");
var hourEight = moment().hour(16).format("hA");
var hourNine = moment().hour(17).format("hA");

// dynamically set time slot in html
var setHourOne = document.querySelector("#timeSlotOne")
 setHourOne.textContent = hourOne

 var setHourTwo = document.querySelector("#timeSlotTwo")
 setHourTwo.textContent = hourTwo

 var setHourThree = document.querySelector("#timeSlotThree")
 setHourThree.textContent = hourThree

 var setHourFour = document.querySelector("#timeSlotFour")
 setHourFour.textContent = hourFour

 var setHourFive = document.querySelector("#timeSlotFive")
 setHourFive.textContent = hourFive

 var setHourSix = document.querySelector("#timeSlotSix")
 setHourSix.textContent = hourSix

 var setHourSeven = document.querySelector("#timeSlotSeven")
 setHourSeven.textContent = hourSeven

 var setHourEight = document.querySelector("#timeSlotEight")
 setHourEight.textContent = hourEight

 var setHourNine = document.querySelector("#timeSlotNine")
 setHourNine.textContent = hourNine

// create working hours array
var workingHours = [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven, hourEight, hourNine];

// loop through working hours 

for (i = 0; i < workingHours.length; i++) {
 

    
    
}

// dynamically display current date
var currentDayDisplay = function(){
    $("#currentDay").text(currentDay)
}

// call function to display current date
currentDayDisplay();
