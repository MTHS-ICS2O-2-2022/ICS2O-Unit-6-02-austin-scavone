// Copyright (c) 2022 Austin scavone All rights reserved
//
// Created by: Austin scavone
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-6-02/sw.js", {
    scope: "/ICS2O-6-02/",
  })
}

function cookiePoint() {
  if (localStorage.howManyTimesClickedTheCookie) {
    localStorage.howManyTimesClickedTheCookie =
      Number(localStorage.howManyTimesClickedTheCookie) + 1
  } else {
    localStorage.howManyTimesClickedTheCookie = 1
  }
  document.getElementById("hits").innerHTML =
    "Total Hits :" + localStorage.howManyTimesClickedTheCookie
}
