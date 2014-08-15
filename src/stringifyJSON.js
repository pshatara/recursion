// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  	// your code goes here
  	var objType = typeof(obj);
  	// Stringifies all string/number/booleon input
	if (objType != 'object' || obj === null) {
		if (objType == 'string') {
			obj = '"'+obj+'"';
		}
		return String(obj);

	} else {
		var json = [];
		var arrTest = (obj && obj.constructor === Array);
		// Stringifies input from arrays
		if (arrTest) {
			for (var i = 0; i < obj.length; i++) {
				json.push(typeof(obj[i]) != 'object' ? (typeof(obj[i]) === 'string' ? '"' + String(obj[i]) + '"' : String(obj[i])) : stringifyJSON(obj[i]));
			}
			return '[' + json + ']';
		} else { //Strinifies input from all other objects including functions
			for (var key in obj) {
				var value = obj[key];
				objType = typeof(value);

				if (objType === 'string') {
					value = '"' + value + '"';
				} else if (objType === 'function') {
					var x = value();
					value = (x != 'object' ? x : stringifyJSON(x));
				} else if (objType === 'object' && value !== null) {
					value = stringifyJSON(value);
				}

				if (value !== undefined) {
					json.push('"' + key + '"' + ':' + value);
				} else if (value === null) {
					json.push('"' + key + '"' + ':' + value);
				}
			}
			return ('{' + String(json) + '}');
		}
	}
};
