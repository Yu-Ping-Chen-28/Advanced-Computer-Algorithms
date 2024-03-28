//Task 2: n=1000. Print the first 20 values A[1], A[2], ..., A[20] and the last 20 values A[n-19], A[n-18], ..., A[n].

import * as fs from 'fs';

// Read the input file
const input = fs.readFileSync('data.txt', 'utf8');
let data = input.split(" ").map(Number);
//插入一個數字到deat[0]的位置，並將原先的data[]全部往後移動一個位置
//heap要從1開始，所以要在data[0]插入一個0
data.unshift(0);

// Call the main function to build the min-heap and print the results
main(data);

// Min-heapify function
function heapify(data, i, n) {
    let left = 2 * i;
    let right = 2 * i + 1;
    let smallest = i;

    if (left <= n && data[left] < data[i]) {
        smallest = left;
    }

    if (right <= n && data[right] < data[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        
        swap(data,smallest,i);

        // Recursively heapify the subtree
        heapify(data, smallest, n);
    }
    return data;
}

// Swap data[i] and data[smallest]
function swap(data,smallest,i){
    [data[i], data[smallest]] = [data[smallest], data[i]];
    return data;
}

// Build min-heap function
function buildMinHeap(data) {
    const n = data.length - 1;
    for (let i = Math.floor(n / 2); i >= 1; i--) {
        heapify(data, i, n);
    }
}

// Main function
function main(data) {

    // Build a min-heap
    buildMinHeap(data);

    // Print the first 20 values data[1], data[2], ..., data[20]
    console.log("First 20 values:");
    const n = data.length-1;
    for (let i = 1; i <= 20 && i <= n; i++) {
        if(i==20){
            process.stdout.write(data[i]+'\n');
        }
        else{
        process.stdout.write(data[i]+',');}
    }
    
    console.log("Last 20 values:");
    for (let i = n-19; i <= n ; i++) {
        if(i==1000){
        process.stdout.write(data[i]+'\n');}
        else{
        process.stdout.write(data[i]+',');}
    }
}

//1,2,6,3,11,7,8,4,5,12,27,16,9,10,20,35,14,34,24,28
//683,858,367,597,969,591,979,604,671,787,788,588,807,1000,745,844,888,563,889,966
