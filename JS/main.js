//=================== PageLoader=================

let pageLoader;
window.addEventListener("load", function () {
  pageLoader = setTimeout(showPage, 1000);
});

function showPage() {
  document.querySelector(".loader").classList.replace("d-flex", "d-none");
  document.querySelector(".main").classList.replace("d-none", "d-block");
}

// ===============================================

//=================== SideNav ====================

$("#open").click(() => {
  $(".nav").animate({ left: `0px` }, 300);
});

$("#close").click(() => {
  closeSideNav();
});

function closeSideNav() {
  let headerWidth = $("#header").outerWidth(true);
  $(".nav").animate({ left: `-${headerWidth}px` }, 300);
}
setTimeout(() => {
  closeSideNav();
}, 2000);

$(window).on("scroll", () => {
  let headerheight = $("#header").outerHeight(true);
  console.log(headerheight);
  if ($(window).scrollTop() > headerheight - 150) {
    $("#open").css("color", "black");
  } else {
    $("#open").css("color", "white");
  }
});

// ================================================
// ================= CountDown ====================

let countDownDate = new Date("Dec 31, 2027 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}D` : days;
  document.querySelector(".hours").innerHTML =
    hours < 10 ? `0${hours}h` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}m` : minutes;

  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}s` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// ================================================
