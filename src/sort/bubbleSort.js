function bubbleSort(array) {
    let isSorted;
    let tmp;

    do {
        isSorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                isSorted = false;
            }
        }
    } while (!isSorted);

    return array;
}

module.exports = bubbleSort;
