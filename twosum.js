var twosum = function (arr, target) {
    let r = 0;
    let l = arr.length - 1;
    while (r != l) {
        if (arr[r] + arr[l] > target) {
            l -= 1;
        }
        else if (arr[r] + arr[l] < target) {
            r += 1;
        }
        else {
            return [r, l];
        }


    }
    return "No two indices add up to the target";
}


console.log(twosum([1, 2, 2, 4], 7));