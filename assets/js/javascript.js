// get current date 
var currentDay = moment().format("dddd, MMMM Do");

// // get time slot comparison value
var currentHour = moment().format("HH");
Number(currentHour);
// console.log(currentHour);

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

// get time slot hour value in Military Time notation
var hourOneMT = moment().hour(9).format("HH");
var hourTwoMT = moment().hour(10).format("HH");
var hourThreeMT = moment().hour(11).format("HH");
var hourFourMT = moment().hour(12).format("HH");
var hourFiveMT = moment().hour(13).format("HH");
var hourSixMT = moment().hour(14).format("HH");
var hourSevenMT = moment().hour(15).format("HH");
var hourEightMT = moment().hour(16).format("HH");
var hourNineMT = moment().hour(17).format("HH");


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

var workingHours = [hourOneMT, hourTwoMT, hourThreeMT, hourFourMT, hourFiveMT, hourSixMT, hourSevenMT, hourEightMT, hourNineMT];

// set variables for div description containers

var descOne = document.querySelector("#descriptionOne")

var descTwo = document.querySelector("#descriptionTwo")

var descThree = document.querySelector("#descriptionThree")

var descFour = document.querySelector("#descriptionFour")

var descFive = document.querySelector("#descriptionFive")

var descSix = document.querySelector("#descriptionSix")

var descSeven = document.querySelector("#descriptionSeven")

var descEight = document.querySelector("#descriptionEight")

var descNine = document.querySelector("#descriptionNine")

// create div container array

var arrTimeBlock = [descOne, descTwo, descThree, descFour, descFive, descSix, descSeven, descEight, descNine]

// loop through working hours 

for (i = 0; i < workingHours.length; ) {

  Number(workingHours[i])

    if (currentHour > workingHours[i]) {
        console.log(currentHour + " is after " + workingHours[i])
        arrTimeBlock[i].classList.add("past")
    } else if (currentHour === workingHours[i]) {
        console.log(currentHour + " is equal to " + workingHours[i])
        arrTimeBlock[i].classList.add("present")
    } else if (currentHour < workingHours[i]) {
        console.log(currentHour + " is before " + workingHours[i])
        arrTimeBlock[i].classList.add("future")
    }

    i++
};

// listen for click on description element

$(".description").on("click", function(){
    console.log("description clicked!")
})

// dynamically display current date
var currentDayDisplay = function(){
    $("#currentDay").text(currentDay)
}

// call function to display current date
currentDayDisplay();
