function sum(a) {
    var sum = 0; //changed a[0] to just be 0. a[0] is just taking the first element.
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
