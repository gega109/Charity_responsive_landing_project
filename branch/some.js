let explorerBtn = document.getElementById("explorer");
let expBox = document.getElementById("explore_box2");
let some = 0;

explorerBtn.addEventListener("click", () => {
  if (some === 0) {
    some++;
    expBox.style.display = "flex";
    explorerBtn.textContent = "UNDO ALL";
  } else {
    some--;
    explorerBtn.textContent = "EXPLORE ALL";
    expBox.style.display = "none";
  }
});
