function findSmallestMissingPositive(arr) {
    let i = 1;

    while (arr.includes(i)) {
        i++;
    }

    return i;
}