"use strict";

document.getElementById("searchString").onfocus = function () {
  let dataList = document.getElementById("datalist");
  dataList.innerHTML = "";
  //get history from localstorage
  const storedHistory = JSON.parse(localStorage.getItem("history"));

  if (storedHistory) {
    for (let searchItem of storedHistory) {
      dataList.innerHTML += '<option value="' + searchItem + '"/>';
    }
  }
};

document.getElementById("searchString").onblur = function () {
  document.getElementById("searchString").value = "";
};

document.getElementById("searchString").onkeydown = function (e) {
  //if pressed ENTER
  if (e.keyCode == 13) {
    const input = document.getElementById("searchString").value;

    //if first search ... no history in localstorage
    let storedHistory = [];
    //if history present in Localstorage
    if (localStorage.getItem("history")) {
      storedHistory = JSON.parse(localStorage.getItem("history"));
    }
    //insert at beginning of array
    storedHistory.unshift(input);
    //store the recent history in localstorage
    localStorage.setItem("history", JSON.stringify(storedHistory));
    window.location = "https://www.google.com/search?q=" + input;
  }
};
