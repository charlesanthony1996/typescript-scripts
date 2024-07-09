class QuickSort {
    private array: number[]

    constructor(array: number[]) {
        this.array = array
    }

    public sort(): number[] {
        return this.quickSort(this.array)
    }

    public quickSort(originalArray: number[]): number[] {
        if (originalArray.length <= 1) {
            return originalArray
        }
        else {
            let left : number[] = []
            let right : number[] = []
            let newArray: number[] = []
            let pivot : number = originalArray.pop()!
            let length : number = originalArray.length

            for (let i = 0; i < length; i++) {
                if(originalArray[i] <= pivot) {
                    left.push(originalArray[i])
                } else {
                    right.push(originalArray[i])
                }
            }

            return newArray.concat(this.quickSort(left), pivot, this.quickSort(right))
        }

    }
}

const myArray: number[] = [3, 4, 52, 4, 2, 5, 4, 2]
const sorter = new QuickSort(myArray)

// console.log("Original Array: " + myArray)
// const sortedArray: number[] = sorter.sort()
// console.log("Sorted Array: ", sortedArray)

console.log(sorter.sort())