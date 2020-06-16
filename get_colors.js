//getPalette(image [, colorCount, quality]
//getColor(image [, quality])

import ColorThief from './Javascript/Tools/color-thief/color-thief.mjs'
import './Javascript/Tools/color-conversion-algorithms.js'

const colorThief = new ColorThief();
const img = document.querySelector('img');

if (img.complete) {
  var colorArr = colorThief.getPalette(img, 5);
  console.log(colorArr)
} else {
  image.addEventListener('load', function() {
    var colorArr = colorThief.getPalette(img, 5);
    console.log(colorArr)
  });
}

var i;
for (i = 0; i < colorArr.length; i++) {
  var x = "swatch"+ (i + 1)
  document.getElementById(x).style.backgroundColor = "rgb("+colorArr[i][0]+","+colorArr[i][1]+","+colorArr[i][2]+")";
}
