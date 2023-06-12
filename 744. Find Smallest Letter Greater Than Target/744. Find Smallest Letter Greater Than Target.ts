function nextGreatestLetter(letters: string[], target: string): string {
    let res: string = letters[0];
    let left: number = 0;
    let right: number = letters.length - 1;
    while (left <= right) {
        let mid: number = left + Math.floor((right - left) / 2);
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
}