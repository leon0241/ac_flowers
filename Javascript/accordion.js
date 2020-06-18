  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName("panel");
  var i;

  console.log(panel[1])
  console.log(acc[1])
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){accordion2(this, panel)} , false);
  }

function accordion(x, y){
    for (i = 0; i < acc.length; i++) {
      if(acc[i].classList.contains("active") && acc[i] != x){
        console.log("true")
        acc[i].classList.remove("active")
        y[i].style.maxHeight = null;
      }
    }

  var section = x
  x.classList.toggle("active");

  var panel = x.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordion2(x, y){
  for (i = 0; i < acc.length; i++) {
    if(acc[i].classList.contains("active") && acc[i] != x){
      console.log("true")
      acc[i].classList.remove("active")
      y[i].style.display = "none";
    }
  }

  var section = x
  x.classList.toggle("active");

  var panel = x.nextElementSibling;
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
}
