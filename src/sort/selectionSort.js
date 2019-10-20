function selectionSort(array) {
    let tmp;
    for (let i = 0; i < array.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[idx]) {
                idx = j;
            }
        }
        if (idx !== i) {
            tmp = array[i];
            array[i] = array[idx];
            array[idx] = tmp;
        }
    }

    return array;
}

module.exports = selectionSort;
