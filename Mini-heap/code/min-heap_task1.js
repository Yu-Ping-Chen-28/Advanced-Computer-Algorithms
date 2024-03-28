//Task 1: n=20. Print the resulting A to verify the correctness your code.
import * as fs from 'fs';

// Read the input file, and just read 20 numbers to data[]
const input = fs.readFileSync('data.txt', 'utf8');
let data = input.split(" ").map(Number);
data = data.slice(0, 20);
//console.log(data);
//插入一個數字到deat[0]的位置，並將原先的data[]全部往後移動一個位置
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
    console.log("Print Sorted data:");
    const n = data.length-1;
    for (let i = 1; i <= 20 && i <= n; i++) {
        if(i==20){
            process.stdout.write(data[i]+'\n');
        }
        else{
        process.stdout.write(data[i]+',');}
    }
    
}

//4,75,80,141,199,140,271,357,214,345,980,632,791,513,861,713,378,932,759,362
