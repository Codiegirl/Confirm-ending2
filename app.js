//solved in one-line
function confirmEnding(str, target){
    return str.substr(-target.length)===target
  }
  confirmEnding("Rachell", "m")
  
  //solved with .slice method
  function confirmEnding(str, target){
    return str.slice(-target.length)===target
  }
  confirmEnding("Rachell", "l")
  