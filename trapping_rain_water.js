var trap_rain = function (heights) {
    var max_left = [];
    var max_right = [];
    var result = 0;
    var sum;

    for (let i = 0; i < heights.length; i++) {
        if (i == 0) {
            max_left.push(0);


        }
        else {
            max_left[i] = Math.max(heights[i - 1], max_left[i - 1]);

        }
    }

    for (let i = heights.length - 1; i >= 0; i--) {
        if (i == heights.length - 1) {
            max_right[heights.length - 1] = 0;
            sum = Math.min(max_right[heights.length - 1], max_left[heights.length - 1]) - heights[heights.length - 1];
            if (sum > 0) {
                result += sum;
            }

        }
        else {
            max_right[i] = Math.max(heights[i + 1], max_right[i + 1]);
            sum = Math.min(max_right[i], max_left[i]) - heights[i];
            if (sum > 0) {
                result += sum;
            }

        }
    }

    return result;



}

height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1]
console.log(trap_rain(height));