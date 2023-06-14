# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import Optional, TreeNode
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        stack = []
        current = root
        prev = None
        min_diff = float('inf')

        while stack or current:
            while current:
                stack.append(current)
                current = current.left

            current = stack.pop()
            if prev is not None:
                min_diff = min(min_diff, current.val - prev.val)
            prev = current

            current = current.right

        return min_diff
