

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if(arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the target element is not found
}

function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while(arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if(prev >= n) {
            return -1; // Target not found
        }
    }

    for(let i = prev; i < Math.min(step, n); i++) {
        if(arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}


let array = [1, 2, 3, 4, 5];
console.log(linearSearch(array, 4)); // Returns 3
console.log(linearSearch(array, 6)); // Returns -1
console.log(binarySearch(array, 4)); // Returns 3
console.log(binarySearch(array, 6)); // Returns -1
