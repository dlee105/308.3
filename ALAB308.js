// Part 1
// --------------------------------------------- //
console.log("Question 1 -");
let temp1 = "";
let lnum = 0;

for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    temp1 += "Fizz Buzz | ";
    lnum += 1;
    //console.log("Fizz Buzz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    temp1 += "Buzz | ";
    lnum += 1;
    //console.log("Buzz | ");
  } else if (i % 3 === 0 && i % 5 !== 0) {
    temp1 += "Fizz | ";
    lnum += 1;
    //console.log("Fizz | ");
  } else {
    temp1 += i + " | ";
    lnum += 1;
    //console.log(i);
  }

  // IMPROVED FORMAT FOR CLARITY
  // REMOVE THE IF STATEMENT BELOW & UNCOMMENT console.log ABOVE
  // FOR THE STANDARD VIEW

  if (lnum === 10) {
    console.log(temp1.slice(0, -2) + "\n");
    lnum = 0;
    temp1 = "";
  }
}

// --------------------------------------------- //

let n = 100;
let m = n + 50;
const userinput = n;

while (n < m) {
  let state = false;
  let j = 2;
  while (j < n) {
    if (n % j === 0) {
      state = true;
      break;
    }
    j++;
  }
  if (n > 1 && state === false) {
    console.log(
      "----------------------\nQuestion 2 -",
      n,
      "is the next prime number from",
      userinput
    );
    break;
  }
  n++;
}

// NOT THE BEST WAY TO DO IT BUT IT GETS THE JOB DONE :) WONT WORK THAT WELL IN SOME CASES //
// PART 3 //
console.log("----------------------\nQuestion 3");
let data =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let temp2 = "";
let limit = data.length;

//console.log(limit, data[0]);

let counter = 0;
while (counter <= limit) {
  if (data[counter] === "\n" || counter === limit) {
    // counter === limit because without it, the loop only print up to the previous to last row
    console.log(temp2);
    temp2 = "";
  } else if (data[counter] === ",") {
    temp2 += " | ";
  } else {
    temp2 += data[counter];
  }
  counter++;
}
