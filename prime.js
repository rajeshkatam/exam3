var x= 8;
var y=x-1;

var func1 = function(param1, param2){

	if(param2 == 1){
		return false;
	}

	if(param1%param2 ==0 && param2 !=1){
		return true;
	}


	return func1(param1 ,param2-1) 
}

var result = func1(x,y);

if(result){
	console.log('not prime');
}

else {
	console.log('prime')
}