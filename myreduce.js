
debugger;
Array.prototype.myreduce = function(func) {

	var currArr = this;
	var result = [];

	for(i=0; i<currArr.length; i++){

		var acc = currArr[0];
		result = acc+ currArr[i+1];
		
	}
};

	function myfunc(item, index, arr){
		console.log(result);
	}


var arr = [1, 2, 3, 4, 5, 6];
arr.myreduce(myfunc);
