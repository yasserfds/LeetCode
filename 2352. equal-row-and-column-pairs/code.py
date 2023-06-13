import collections
import List

class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        counter = collections.Counter()

        for row in grid:
            counter[tuple(row)] += 1
        total = 0
        N = len(grid)
        for i in range(N):
            now = []
            for j in range(N):
                now.append(grid[j][i])
            total += counter[tuple(now)]
        return total