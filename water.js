const water = function(heights){
    let left = 0;
    let right = heights.length-1;
    let max_area = 0;
    while (left < right){
        let smaller = (heights[left]<heights[right])? heights[left] : heights[right];
        let delta = right - left;
        max_area = Math.max(smaller*delta,max_area);
        if (smaller == heights[left]){
            left +=1;
        }
        else if(smaller == heights[right]){
            right -=1;
        }
        else{
            left +=1;
        }
    }

    return max_area;
}

heights = [2,2,2];
console.log(water(heights));