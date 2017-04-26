function overlay() {
  var el = document.getElementById("overlay");

	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

window.onclick = function(event) {
  el = document.getElementById("overlay");
  if (event.target == el) {
      el.style.visibility = "hidden";
  }
}
