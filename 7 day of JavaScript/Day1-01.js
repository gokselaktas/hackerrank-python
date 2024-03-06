function processData(input) {
    console.log(input)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "Hello World!";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
