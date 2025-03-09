binarySearch <- function(arr, target) {
  low <- 1
  high <- length(arr)
  while (low <= high) {
    mid <- low + (high - low) %/% 2
    guess = arr[mid]
    if (guess == target) {
      return(mid)
    }
    if (guess > target) {
      high <- mid - 1
    } else {
      low <- mid + 1
    }

  }
  return - 1
}

# example
arr <- c(1, 2, 3, 4, 5, 6, 7, 8)
target <- 5
print(binarySearch(arr, target)) # 5