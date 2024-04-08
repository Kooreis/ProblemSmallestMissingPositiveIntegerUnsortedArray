Here is a TypeScript solution for the problem:

```typescript
function findSmallestMissingPositive(arr: number[]): number {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > 0 && arr[i] <= arr.length && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    return arr.length + 1;
}

console.log(findSmallestMissingPositive([3, 4, -1, 1]));
console.log(findSmallestMissingPositive([1, 2, 0]));
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12]));
```

This solution works by first rearranging the array so that if an element `i` is positive and less than or equal to the length of the array, it is moved to the `i - 1` index. This is done in the first while loop.

Then, in the second loop, it checks each index `i` to see if the element at that index is `i + 1`. If it is not, then `i + 1` is the smallest missing positive integer.

If no missing positive integer is found in the second loop, then the smallest missing positive integer is `arr.length + 1`.