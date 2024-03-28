//Task 2: n=1000. Print the first 20 values A[1], A[2], ..., A[20] and the last 20 values A[n-19], A[n-18], ..., A[n].
//1. Based on results of task 2 in Q1, we then delete elements from and insert elements into the min-heap
//2. You are given the following sequence of integers: 0 1018 1021 0 1007 0 0 1026 1001 0 0 1014 0
//3. For a positive integer, then insert it into the min-heap.
//4. On the other hand, if it is 0, then we are going to extract the root A[1] from the min-heap. Process the insertion/deletion requests one by one.
//5. Print the first 20 values A[1], A[2], ..., A[20] and the last 20 values A[n'-19], A[n'-18], ..., A[n'], where n' is the number of elements in the resulting array.

import * as fs from 'fs';

// Read the input file (sorted by min-heap_task2.js)
const input = fs.readFileSync('q2.txt', 'utf8');
let data = input.split(',').map(Number);
//console.log(data);

let add_data = [0,1018,1021, 0, 1007, 0, 0, 1026, 1001, 0, 0, 1014, 0]
//console.log(add_data);

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

//Replace the deleted node with the farthest right node. 
function deletion(){
    //replace first node with last node
    data[1] = data[data.length-1];
    data.pop();
    heapify(data,1,data.length-1);
}

function insertion(addition){
    //insert a number
    data.push(addition);
    //console.log(data.length-1);
    return data;
}

// Main function
function main(data) {

    // Build a min-heap
    buildMinHeap(data);
    
    for (const value of add_data){
        if(value==0){
            deletion();
        }
        else{
            insertion(value);
            //console.log(value);
        }
    }

    //console.log(data.length-1);

    //Print the first 20 values data[1], data[2], ..., data[20]
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
        if(i==999){
        process.stdout.write(data[i]+'\n');}
        else{
        process.stdout.write(data[i]+',');}
    }
}

