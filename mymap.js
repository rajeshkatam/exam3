Array.prototype.mymap = function(func) {

	var currArr = this;
	var result = [];

	for(i=0; i<currArr.length; i++){

		func(currArr[i], i, currArr);
		
	}
};

	function myfunc(item, index, arr){

		//console.log('item: ', item, 'index', index, 'compArr', arr);
		result=  item * index; // we can return something with the iterating values.
		
		console.log('item: ', item, 'index', index, 'compArr', arr, result);
	}


var arr = [1, 2, 3, 4, 5, 6];
arr.mymap(myfunc);
