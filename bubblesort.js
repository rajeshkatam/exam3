var a = [10, 5, 6, 3, 4, 2, 2, 1, 5, 7, 8];
for (var j = 0; j < a.length; j++) {
    for (var i = 0; i < a.length; i++) {

        if (a[i] > a[i + 1]) {

            var temp;
            temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;

        }
    }
}
console.log(a);
