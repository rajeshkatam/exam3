Array.prototype.mycontact = function(inpArr) {

	var currArr = this;
	var result =[];

	for(i=0; i<currArr.length; i++){
		result.push(currArr[i]);
	}


	for(j=0; j<inpArr.length; j++){
		result.push(inpArr[j]);
	}

	return result;
};

var a = ['hi', 'how', 'are', 'you', 'doing'];
var b = ['I' , 'am' , 'doing' , 'fine']; 
 var c = a.mycontact(b);
 console.log(c);