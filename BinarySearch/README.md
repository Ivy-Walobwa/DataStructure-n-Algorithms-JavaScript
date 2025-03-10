# Binary Search

A search algorithm used with a sorted list of items by eliminating half of the elements every time.

- Input - Sorted list of elements , target element

- Output - position of found element or null if not found

## Algorithm

1. Store low and high index
2. Repeat while low <= high
   1. Calculate mid index, (low+high)/2
   2. if elements[mid] equals target, return mid
   3. if elements[mid] is higher than target, update high index (mid - 1)
   4. else, update low index (mid + 1)
3. If loop ends without finding target, return null

Time Complexity: O(log n)
