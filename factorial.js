function myfactorial(num) {

    if (num == 0 || num == 1) {
        return 1;
    }

    if (num > 1) {
        return num * myfactorial(num - 1);

    }
}
result = myfactorial(5);
console.log(result);