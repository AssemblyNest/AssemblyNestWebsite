function enableSubmitBtn() {
  document.getElementById("submitBtn").disabled = false;
}

// Counting textarea input id=charNum
function countChar(val) {
  var max = 400;
  var len = val.value.length;
  if (len >= max) {
    $('#charNum').text(' you have reached the limit');
  } else {
    var char = max - len;
    $('#charNum').text(len + '/' + char);
  }
}


var i = 0;
var j = 0;
var txt = 'Message sent! Thank you.'; /* The textcount 24 */
var txt2 = 'We will get back to you shortly.';
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("msgSent").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i >= 24) // if txt textcount will change this neeeds to be change also
   {
    if (j < txt2.length){
      document.getElementById("getBack").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter, speed);
    }
  }
}