function insertionSort(array) {
    let current;
    
    for (let i = 1; i < array.length; i++) {
        current = array[i];
        let j = i;
        while (current < array[j-1]) {
            array[j--] = array[j];
        }
        array[j] = current;
    }

    return array;
}

module.exports = insertionSort;
