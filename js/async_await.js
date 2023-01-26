async function weather(){
    let ktmWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("19deg");
        }, 1000);
    })

    let birWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("23deg");
        }, 8000);
    })

    console.log("fetching ktm temp");
    let ktmTemp = await ktmWeather;
    console.log("fetched ktm temp:", ktmTemp);
    console.log("fetching bir temp");
    let birTemp = await birWeather;
    console.log("fetched bir temp:", birTemp);
    return [ktmTemp, birTemp];
}

// console.log(weather())         //this will display promise as well

// weather().then((value)=>{
//     console.log(value)
// })




// adding another asyc function 

let better = async ()=>{
    // setTimeout(() => {
        console.log("I am just an example")
    // }, 3000);
}

async function combine(){
    // let first = weather();
    // let second = better();
    let first = await weather();
    let second = await better();
    // let comb = Promise.all([first, second])
    // return comb;
}

combine();


