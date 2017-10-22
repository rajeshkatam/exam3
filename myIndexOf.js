
// debugger;

// Array.prototype.myIndexOf = function(char){

// 	var currArr = this;
// 	var result = -1;
// 	for(var i = 0; i<currArr.length; i++){
// 		if(currArr[i]==char){
// 			return i;
// 		}

// 	}
// 	return result;
	
// }

// var a = ['Hello', 'how', 'are','are',  'you', 'doing'];
// console.log(a.myIndexOf('are'));

debugger;

Array.prototype.myIndexOf = function(char){

	var currArr = this;
	var result = -1;
	for(var i = 0; i<currArr.length; i++){
		if(currArr[i]==char){
			result = i;
		}

	}
	return result;
	
}

var a = ['Hello', 'how', 'are','are',  'you', 'doing'];
console.log(a.myIndexOf('are'));