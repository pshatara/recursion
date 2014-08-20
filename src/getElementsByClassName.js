// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var counter = 1;
var getElementsByClassName = function(className){
  // your code here
  var list = [];

  var walkTheDom = function(node, fun) {
    fun(node);
    node = node.childNodes[0];
    while (node) {
      walkTheDom(node, fun);
      node = node.nextSibling;
    }
  }

  walkTheDom (document.body, function(node) {
    var arr;
    if (node.className) {
      arr = node.classList;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === className) {
          list.push(node);
          break;
        }
      }
    }
  });
  
  return list;
};