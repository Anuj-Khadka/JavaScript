let p = fetch("https://jsonplaceholder.typicode.com/todos/1");
p
.then((response) => {
      console.log(response.status);
      console.log(response.ok);
      if(response.ok){
            console.log("success");
      }
      else{
            console.log(failed)
      }
      return response.text();
      // return response.json();
})
.then((res) => console.log(res))
.catch((err)=> console.log('Error'))