var x = document.getElementById("hideFlowersB")
console.log(x)
x.addEventListener('click', function(){hideflowers()} , false);

function hideflowers(){
  var flowerset = document.getElementsByClassName("swatchFlower")
  var i;
  for(i=0; i < flowerset.length; i++){
    if(flowerset[i].style.display === "none"){
      flowerset[i].style.display = "block";
    } else{
      flowerset[i].style.display = "none";
    }

  }
}
