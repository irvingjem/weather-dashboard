// pull HTML elements 
var cityInput = document.getElementById("city");
var searchBtn = document.getElementById("submit-search");
var currentDayContainer = document.getElementById("current-day");
var searchHistoryContainer = document.getElementById("search-history");
var forecastContainer = document.getElementById("forecast");
var uvi = document.getElementById("uv-index")

// global variables
var apiURL = 'http://api.openweathermap.org/';
var apiKey = 'c153f6386c3ebd7914ae0a756ca8b079';
var searchHistory = [];
var previousSearch = JSON.parse(localStorage.getItem("searched"));

if (previousSearch) {
    searchHistory = previousSearch;
};