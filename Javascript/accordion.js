var x = document.getElementById("customiseInner");
var acc = x.getElementsByClassName("accordion");
var i;
var test = document.getElementsByClassName("accordion")[0];
console.log(acc)
console.log(test)
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
