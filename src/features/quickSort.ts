export default function quickSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number
): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[arr.length - 1]
  const leftArr: T[] = []
  const rightArr: T[] = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (compare(arr[i], pivot) < 0) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  const sortedLeftArr: T[] = quickSort(leftArr, compare)
  const sortedRightArr: T[] = quickSort(rightArr, compare)

  return [...sortedLeftArr, pivot, ...sortedRightArr]
}
