function enableSubmitBtn(){
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
      $('#charNum').text(len+'/'+char);
    }
  }