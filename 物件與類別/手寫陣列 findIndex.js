// 手寫 `findIndex` 的函式，它會接受三個參數：

// - array：要搜索的陣列
// - predicate：測試函數，用於判斷元素是否符合所需條件
// - `fromIndex`：搜索的起始索引，如果未指定，則默認為 0

// `findIndex` 函式，會返回陣列中第一個滿足 `predicate` 函式的元素的索引。如果找不到符合條件的元素，則返回 `-1`。


function findIndex(array, predicate, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? fromIndex + array.length : fromIndex

    for (let i = startIndex; i < array.length; i++) {
        if (predicate(array[i])) {
            return i
        }
    }

    return -1


}
console.log(findIndex([1, 13, 7, 54], (num) => num > 10, -1))
console.log(findIndex([1, 13, 7, 54], (num) => num > 200))

findIndex([1, 13, 7, 54], (num) => num > 10)
findIndex([1, 13, 7, 54], (num) => num > 200)


const a = [1, 2, 3, 4, 5, 6]
console.log()