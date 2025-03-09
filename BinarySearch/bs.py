def binary_search(arr, target):
    low = 0
    high = len(arr)-1
    while low <= high:
        mid = (low+high)//2
        guess = arr[mid]
        if guess == target:
            return mid
        if guess > target:
            high = mid - 1
        else:
            low = mid + 1
    return None

# example
arr = [1, 2, 3, 4, 5, 6, 7, 8];
target = 5
print(binary_search(arr, target)) # 4
