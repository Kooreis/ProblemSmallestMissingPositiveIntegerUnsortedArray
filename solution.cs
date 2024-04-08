Here is a JavaScript solution for the problem:

```javascript
function findSmallestMissingPositive(arr) {
    let i = 1;

    while (arr.includes(i)) {
        i++;
    }

    return i;
}

console.log(findSmallestMissingPositive([3, 4, -1, 1]));
console.log(findSmallestMissingPositive([1, 2, 0]));
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12]));
```

This console application defines a function `findSmallestMissingPositive` that takes an array of integers as input and returns the smallest missing positive integer. It then calls this function with three different arrays and logs the results to the console.