function processData(input) {
    // assign n and k arguments from stdin
    let n = Number(input[0]);
    let k = Number(input[2]);
    // initialize result and isK
    let result = 0;
    let isK = false;
    // loop iterator j represents jump value
    for(let j = 1; j <= n; j++) {
        // increment result by jump value
        result += j;
        // check if result is equal to k
        if(result === k) {
            isK = true;
        }
    }
    // set finalResult equal to result, if result is
    // larger than finalResult and k wasn't encountered
    if(isK) {
        result = result - 1;
    }
    process.stdout.write(String(result));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
