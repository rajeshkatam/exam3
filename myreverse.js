// debugger;
Array.prototype.myreverse = function() {

    var currArr = this;
    var result = [];

    for (i = currArr.length - 1; i >= 0; i--) {

        result.push(currArr[i]);

    }

    console.log(result);
}
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.myreverse();