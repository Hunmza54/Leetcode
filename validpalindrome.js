var validPalindrome = function (string) {

    let Left = string.length - 1;
    let right = 0;
    while (Left != right) {
        while (string[right] == " ") {
            right += 1;
        }
        while (string[Left] == " ") {
            Left -= 1;
        }

        if (string.charAt(Left).toLowerCase() != string.charAt(right).toLowerCase()) {

            return false;
        }

        if (right == Left) {
            console.log("itworks");
            break;
        }
        right += 1;
        Left -= 1;
    }

    return true;

};

let string = "tac a      cat";




console.log(validPalindrome(string));