// try...catch
// try{
//     let a = 12; 
//     console.log(a);
// }catch(error){
//     console.log(error)
// }

// console.log("wowowo")




// try..catch is synchronous
// try{
//     setTimeout(() => {
//         try{
//             console.log(anuj);
//         }catch(error){
//             console.log(error)
//         }
//     }, 2000);
// }catch(err){
//     console.log(err)
// }





// error object
// try{
//     console.log(yourName);
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }




// finally clause 
try {
    let a = "anuj";
    return a;
} catch (error) {
    console.log(error)
} finally{
    console.log("this will be printed no matter what")
}

