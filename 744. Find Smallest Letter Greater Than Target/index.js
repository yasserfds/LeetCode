/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var res = letters[0];
    var left = 0;
    var right = letters.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (letters[mid] < target) {
            left = mid + 1;
        } else if (letters[mid] === target) {
            left = mid + 1;
        } else {
            res = letters[mid];
            right = mid - 1;
        }
    }
    return res;
};
