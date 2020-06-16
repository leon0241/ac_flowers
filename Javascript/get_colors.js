//getPalette(image [, colorCount, quality]
//getColor(image [, quality])

import ColorThief from './Tools/color-thief/color-thief.mjs'
import { rgbToHsl } from './Tools/color-conversion-algorithms.js'

var arrc = get_color_palette()
rgbToHslConvert(arrc)

function get_color_palette() {
  var colorThief = new ColorThief();
  var img = document.querySelector('img');

  if (img.complete) {
    var colorArr = colorThief.getPalette(img, 2);
    console.log(colorArr)
  } else {
    image.addEventListener('load', function() {
      var colorArr = colorThief.getPalette(img, 2);
      console.log(colorArr)
    });
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
    console.log(x[i][0] + "a" + x[i][1] + x[i][2])
    var hslValue = rgbToHsl(x[i][0], x[i][1], x[i][2])
    var tester = Math.round(hslValue[0] * 360)
    console.log(tester)
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
