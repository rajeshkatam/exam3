
Array.prototype.myslice = function(firstIndex, lastIndex){

	var currArr = this;
	var result = [];
	for(var i = firstIndex; i<lastIndex; i++){			
			result.push(currArr[i]);
	}
	console.log(result);
}

var a = ['Hello', 'how', 'are','are',  'you', 'doing'];
a.myslice(2, 5);