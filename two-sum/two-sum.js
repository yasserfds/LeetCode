/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/**
nums = [1, 5, 9]
target = 10
[0, 2]

i = 0
j = 1

2 5 
5 2

time complexity = 0(N²) -> 0(N)
space complexity = 0(1) - constant -> 0(N)

Hashmap

nums = [1, 5, 9]
target = 10

map = {1: 0, 5: 1}

i = 2
value = 9
complement_pair = 10-9 = 1
[0, 2]
map[1]

*/

var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var complementPair = target - value;
        if (map[complementPair] !== undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
        }
    }
}