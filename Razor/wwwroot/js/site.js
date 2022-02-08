// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Variables
var date = new Date();
var [year, month, day, hour, minute, second, weekDay] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()];

var courses = ["DT057G, Webbutveckling I", "DT084G, Introduktion till programmering i JavaScript", "GD008G, Typografi och form för webb", "DT163G, Digital bildbehandling för webb", "DT093G, Webbutveckling II", "DT003G, Databaser", "DT071G, Programmering i C#.NET"];

// Dates
if (month < 10) {
    month = '0' + month;
}

if (day < 10) {
    day = '0' + day;
}

if (hour < 10) {
    hour = '0' + hour;
}

if (minute < 10) {
    minute = '0' + minute;
}

if (second < 10) {
    second = '0' + second;
}

document.getElementById('date-time').innerHTML = year + "-" + month + "-" + day;

document.getElementById('dateandtime').innerHTML = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

// Courses
for (course of courses) {
    document.getElementById('courses').innerHTML += "<li>" + course + "</li>";
}

// Monday or not
if (weekDay == 1) {
    document.getElementById('dayotw').innerHTML = "måndag";
} else {
    document.getElementById('dayotw').innerHTML = "inte måndag";
}