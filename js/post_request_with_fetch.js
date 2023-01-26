// let reqObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userName: "user1",
//     userAddress: "Nepal",
//   }),
// };

// let p = fetch("https://reqres.in/api/users", reqObj);
// p.then((response) => {
//   return response.json();
// }).then((res) => console.log(res)).catch((err)=>{console.log(err)})






// trying to update data to api

window.addEventListener("load", ()=>{

    let container = document.getElementById("container");
    let form = `
    <form method="post" id="form">
        <input type="text" class="form-control" name="name" id="name">
        <input type="number" class="form-control" name="number" id="number">
        <input type="text" class="form-control" name="address" id="address">
        <input type="submit" class="form-control" id="submit" value="submit">
    </form>
    `
    let body = document.getElementsByTagName("body")

    container.insertAdjacentHTML('afterend', form);
    container.remove()
})




let userForm = document.getElementById("form")

userForm.addEventListener('submit', (e)=>{
    let userName = document.getElementById("name").value
    let userNumber = document.getElementById("number").value
    let userAddress = document.getElementById("address").value

    e.preventDefault();
    let submitObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            name: userName,
            number: userNumber,
            address: userAddress
        }
    }
    
    let posting = fetch("https://jsonplaceholder.typicode.com/posts", submitObj)
    posting.then((response) => response.json())
    .then((data)=> console.log(data))
        
})