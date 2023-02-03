// generator are used to yield the output on the fly when code is run or called
// it is basically used in infinite loops to generate a number or id in the fly without crashing the program


// defining a generator
function* numGenerator(){
    let i = 0;

    // yeild is the other name of return specially used in generators
    // yield 1;
    // yield 2;
    // yield 3;

    // yield i++;
    // yield i++;
    // yield i++;

    // working with loops 
    while(true){
        console.log("waha");
        yield i++;
    }
}

let normalGenerator = numGenerator()
console.log(normalGenerator)
console.log(normalGenerator.next())
console.log(normalGenerator.next())
console.log(normalGenerator.next())