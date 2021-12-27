// get current date 
var currentDay = moment().format("dddd, MMMM Do");
console.log(moment())
// // get time slot comparison value
var currentHour = moment().format("h");
Number(currentHour);
console.log(currentHour);

// get time slot hour value
var hourOne = moment().hour(9).format("h");
var hourTwo = moment().hour(10).format("h");
var hourThree = moment().hour(11).format("h");
var hourFour = moment().hour(12).format("h");
var hourFive = moment().hour(13).format("h");
var hourSix = moment().hour(14).format("h");
var hourSeven = moment().hour(15).format("h");
var hourEight = moment().hour(16).format("h");
var hourNine = moment().hour(17).format("h");

// dynamically set time slot in html
var setHourOne = document.querySelector("#timeSlotOne")
 setHourOne.textContent = hourOne + "AM"

var setHourTwo = document.querySelector("#timeSlotTwo")
 setHourTwo.textContent = hourTwo + "AM"

var setHourThree = document.querySelector("#timeSlotThree")
 setHourThree.textContent = hourThree + "AM"

var setHourFour = document.querySelector("#timeSlotFour")
 setHourFour.textContent = hourFour + "PM"

var setHourFive = document.querySelector("#timeSlotFive")
 setHourFive.textContent = hourFive + "PM"

var setHourSix = document.querySelector("#timeSlotSix")
 setHourSix.textContent = hourSix + "PM"

var setHourSeven = document.querySelector("#timeSlotSeven")
 setHourSeven.textContent = hourSeven + "PM"

var setHourEight = document.querySelector("#timeSlotEight")
 setHourEight.textContent = hourEight + "PM"

var setHourNine = document.querySelector("#timeSlotNine")
 setHourNine.textContent = hourNine + "PM"

// create working hours array
var workingHours = [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven, hourEight, hourNine];

// loop through working hours 

for (i = 0; i < workingHours.length;) {

  Number(workingHours[i])

    if (currentHour > workingHours[i]){
        console.log(currentHour + " is after " + workingHours[i])
    } else if (currentHour === workingHours[i]) {
        console.log(currentHour + " is equal to " + workingHours[i])
    } else if (currentHour > workingHours[i]){
        console.log(currentHour + " is before " + workingHours[i])
    }
    i++
};

// dynamically display current date
var currentDayDisplay = function(){
    $("#currentDay").text(currentDay)
}

// call function to display current date
currentDayDisplay();
