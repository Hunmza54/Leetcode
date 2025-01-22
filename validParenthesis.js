const validParent = function (pren) {

    const matches = {
        '(':')',
        '{':'}',
        '[':']',
    };
    console.log(matches['[']);
    const stack = [];
    let count = 0;
    for (const ch of pren) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);

        }
        else {
            let top = stack.pop();
            console.log(top)
            if (ch === matches[top]) {
                count += 1;
                if (count == pren.length / 2) {
                    return true;
                }

            }
            else {
                return false;
            }

        }

    }
    //console.log(stack);

}
let s = "([{}})"
console.log(validParent(s));