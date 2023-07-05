class Solution:
    def singleNumber(self, nums):
        res = 0
        for i in range(32):
            mask = (1 << i)
            sum = 0
            for n in nums:
                if (n & mask) != 0:
                    sum += 1
            if sum % 3 != 0:
                res |= mask
        return res
