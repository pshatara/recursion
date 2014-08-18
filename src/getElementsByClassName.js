// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var currentNodeTier;
  var list = [];

  if (this === window) {
  	currentNodeTier = document.body;
  } else {
  	currentNodeTier = this;
  }

  for (var i = 0; i < currentNodeTier.childNodes.length; i++) {
  	if (currentNodeTier.childNodes[i].className !== undefined) {
  	    if (currentNodeTier.childNodes[i].classList.contains(className)) {
  	        list.push(currentNodeTier.childNodes[i].classList);
  	    }
  	}

    if (currentNodeTier.childNodes[i].hasChildNodes()) {
      console.log(currentNodeTier.childNodes[i]);
      list.push(currentNodeTier.childNodes[i].getElementsByClassName(className));
    }
  }
  
  console.log(list);
  return list;
};