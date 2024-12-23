let explorerBtn = document.getElementById("explorer");
let playImg = document.getElementById("play_img");
let videoDiv = document.getElementById("video_div");
let eventExplorer = document.getElementById("events_exlporer");
let eventsContainer = document.getElementById("events_container");
let volunteerBox = document.getElementById("volunteer_box");
let volBtn = document.getElementById("volunteers_btn");
let animationExp = document.getElementById("animation");
let closeButton = document.getElementById("close_button");
let explorebox = document.getElementById("explore_box1");


explorerBtn.addEventListener("click", () => {
  if (animationExp.classList.contains("animate")) {
    animationExp.classList.remove("animate");
    animationExp.classList.add("animate-reverse");
    explorerBtn.textContent = "EXPLORE ALL";
  } else {
    animationExp.classList.remove("animate-reverse");
    animationExp.classList.add("animate");
    explorerBtn.textContent = "UNDO ALL";
  }
});

playImg.addEventListener("click", () => {
  videoDiv.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  videoDiv.style.display = "none";
});

eventExplorer.addEventListener("click", () => {
  if (eventsContainer.classList.contains("event_animate")) {
    eventsContainer.classList.remove("event_animate");
    eventsContainer.classList.add("event_animate_reverse");
    eventExplorer.textContent = "EXPLORE ALL";
  } else {
    eventsContainer.classList.remove("event_animate_reverse");
    eventsContainer.classList.add("event_animate");
    eventExplorer.textContent = "UNDO ALL";
  }
});

volBtn.addEventListener("click", () => {
  if (volunteerBox.classList.contains("volunteer_animate")) {
    volunteerBox.classList.remove("volunteer_animate");
    volunteerBox.classList.add("volunteer_animate_reverse");
    volBtn.textContent = "TEAM ALL";
  } else {
    volunteerBox.classList.remove("volunteer_animate_reverse");
    volunteerBox.classList.add("volunteer_animate");
    volBtn.textContent = "UNDO ALL";
  }
});
