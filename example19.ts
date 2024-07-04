// generic swap function example

function swap<T>(arr: T[], index1: number, index2 : number): T[] {
    // check if the indices are within the valid range
    if(index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices")
    }

    // perform the swap using a temporary variable
    const temp = arr[index1]
    arr[index2] = arr[index1]
    arr[index1] = temp

    return arr

}

const nums: numbers[] = [21, 45, 76, 87, 14]
console.log(swap([2, 3, 4], 2, 1))

console.log("converted nums: ", nums)