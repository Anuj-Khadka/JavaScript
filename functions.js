/*
function greet(name, thank='Thank you') {                       //default value if not available while calling 
  console.log(
    `hello ${name}, May your birthday be sprinkled with fun and laughter. ... Wishing you a very special birthday and a wonderful year ahead! I hope your birthday is full of sunshine and rainbows and love and laughter! Sending many good wishes to you on your special day. Happy Birthday! ${thank}`
  );
}
let name = "Anuj";
let name1='Algae';
greet(name, 'thanks you so much');
greet(name1)
*/

/*
let array=['Anuj', 'Algae', 'Khadka', 'Parle', 'Chor']
array.forEach(function(element){
    let vari=element
    //greet(element)
})
*/

// Function that returns a value
/*
function greeting(name) {
    // console.log(`${name}, Wish is as legit as Amazon and eBay.`)
    // return 1;
    let msg=`${name}, Wish is as legit as Amazon and eBay.`;
    return msg;
}
name='Anuj'
let varible = greeting(name);
console.log(varible)
*/

//function with a varible  -- AMONYMOUS FUNCTION
/*
const mygreet = function (name) {                            //when function assigned as varible, no need to name it
  let text = `${name}, Wish is as legit as Amazon and eBay.`;
  return text;
};
name = "ANUJ";
let greetVar = mygreet(name);
console.log(greetVar);
*/

//function inside object
/*
let myboj={
    playerName:'ANuj Khadka',
    working: function(){
        return 'JS';
    }
}
console.log(myboj.working)                                // returns the content on the particular field i.e. working
console.log(myboj.working())                                    //() ==> returns inner content
*/



//Global and Block(Local) Scope
i=100;
{
    // var i=100;
    i=100;
    console.log(i);
}
function scope(name){
    // var i=300;
    let i=200;
    console.log(i + ' '  + 'inside function')
    return(`this is scope by ${name}`)
}
console.log(i + ' '  +  'out of function')
console.log(scope('Anuj'))