//getPalette(image [, colorCount, quality]
//getColor(image [, quality])

import ColorThief from './Tools/color-thief/color-thief.mjs'
import { rgbToHsl } from './Tools/color-conversion-algorithms.js'

//var arrc = get_color_palette()
//rgbToHslConvert(arrc)
//document.querySelector('img')

function get_color_palette(x) {
  var colorThief = new ColorThief();
  var img = x;

  if (img.complete) {
    var colorArr = colorThief.getPalette(img, 4);
  } else {
    img.addEventListener('load', function() {
      console.log("loaded")
      var colorArr = colorThief.getPalette(img, 4);

    }, false);
  }

  var i;
  for (i = 0; i < colorArr.length; i++) {
    var x = "swatch"+ (i + 1)
    document.getElementById(x).style.backgroundColor = "rgb("+colorArr[i][0]+","+colorArr[i][1]+","+colorArr[i][2]+")";
  }
  return colorArr;
}

function rgbToHslConvert(x){

  var i;
  for (i = 0; i < x.length; i++) {
    var hslValue = rgbToHsl(x[i][0], x[i][1], x[i][2])
    var tester = Math.round(hslValue[0] * 360)
    if(tester < 10 || tester > 354){
      console.log("red");
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    } else if(tester >=70 && tester <=140){
      console.log("green")
    }
  }
}

function testFunction(a){
  alert("this is a test" + a)
  console.log(a)
}

function get_dominant_color(){
  var flowers = document.getElementsByClassName("flowerElement")
  var swatches = document.getElementsByClassName("cSwatch")
  var i;
  var rgbArray = new Array();
  for (i = 0; i < swatches.length; i++) {
    var palette = get_color_palette(flowers[i])
    var colorPlace = 0
    if(flowers[i].classList.contains("secondary")){
      colorPlace = 1
    } else if(flowers[i].classList.contains("tertiary")){
      colorPlace = 2
    } else if(flowers[i].classList.contains("special")){
      colorPlace = 3
    }

    if(colorPlace === 3){
      var domCol = [248,134,39]
    } else{
      var domCol = palette[colorPlace]
    }
    swatches[i].style.backgroundColor = "rgb("+domCol[0]+","+domCol[1]+","+domCol[2]+")";

    rgbArray[i] = new Array(domCol[0], domCol[1], domCol[2])
  }
  return rgbArray
}

function rgb_to_hsl(x){
  var hslArray = new Array();
  for (i = 0; i < x.length; i++) {
    var hslValue = rgbToHsl(x[i][0], x[i][1], x[i][2])
    var hVal = Math.round(hslValue[0] * 36000) / 100;
    var sVal = Math.round(hslValue[1] * 10000) / 100;
    var vVal = Math.round(hslValue[1] * 10000) / 100;
    hslArray[i] = new Array(hVal, sVal, vVal)
  }
  return hslArray;
}

function sort_hue(x){
  var sortArr = new Array();
  for (i = 0; i < x.length; i++) {
    sortArr[i] = x[i][0]
  }
}

window.addEventListener('load', function(){
  var rgbArray = get_dominant_color()
  var hslArray = rgb_to_hsl(rgbArray)
  console.log(hslArray)
})

var flowers = document.getElementsByClassName("flowerElement")

for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', function(){get_color_palette(this)}, false);
}
