Array.prototype.myForEach = function(func) {

	var currArr = this;
	var result = [];

	for(i=0; i<currArr.length; i++){

		func(currArr[i], i, currArr);
	}
};

	function myfunc(item, index, arr){

		console.log('item: ', item, 'index', index, 'compArr', arr);
	}


var arr = [1, 2, 3, 4, 5, 6];
arr.myForEach(myfunc);
