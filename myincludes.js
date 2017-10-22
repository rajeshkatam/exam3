debugger;

Array.prototype.myIncludes = function(item) {

	var currArr = this; 
	for(i=0; i<currArr.length; i++){
		if(currArr[i]==item){
			return true;
		}

	}
	return false;
};

var a = ['hello', 'hi' ,' are' , 'you' , 'doing'];
console.log(a.myIncludes('Rajesh'));

