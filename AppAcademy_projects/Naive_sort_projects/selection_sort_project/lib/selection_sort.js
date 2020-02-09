function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}

const findMinIdx = (arr) => {
    let minIdx = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[minIdx] > arr[i]) minIdx = i;
    }
    return minIdx;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        let newMinIdx = 1+i + findMinIdx(arr.slice(i+1));
        if (arr[minIdx] > arr[newMinIdx]) swap(arr, minIdx, newMinIdx);
    }
    
    return arr;
}

module.exports = {
    selectionSort,
    swap
};