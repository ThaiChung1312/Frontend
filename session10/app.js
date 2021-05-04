



// .then(response => response.json())
// .then(json => console.log(json))

// const btn = document.getElementById("btn");
// btn.onclick = function(event){
//     console.log(event.target.parentElement.parentElement.childer[0].innerHTML = "hahahaha");
// }

// event bubbling
// Asynchronous(bat dong bo)




// const data = fetch('https://jsonplaceholder.typicode.com/todos');
// data.then(function(res){
//     console.log(res.json());
//     return res.json();
// }).then(function(data){
//     console.log(data);

//     document.createElement("div");
//     a.innerHTML = data.title
// })
// console.log(data);

// console.log("123");
// console.log("456");


// const btn = document.getElementById("addBtn");
// const myUL = document.getElementById("myUL");

// const data = fetch("https://jsonplaceholder.typicode.com/todos");
// data
// .then(function(res){
// return res.json();
// })
// .then(function(data){
//     // console.log(data);
//     // });
// for(let datas of data){
//     const li = document.createElement("li");
//     li.innerText = datas.title;
//     myUL.appendChild(li);
// }
// });
// btn.onclick = function(event){
// fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: 'POST',
//     body:JSON.stringify({
//         "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(res => res.json())
// .then(data =>console.log(data));
// console.log(event.target.parentElement.parentElement.childer[0].innerHTML = "hahahaha");
// }


// fetch("https://jsonplaceholder.typicode.com/todos/0", {
//     method: 'DELETE',
// })





const ul = document.getElementById("myUL");
const btn = document.querySelector(".addBtn");
const input = document.querySelector("#myInput");
let size;

let uri = "https://jsonplaceholder.typicode.com/todos";

loadData();
function loadData() {
  let data = fetch(uri);
  data
    .then(function (response, err) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      size = data.length;
      for (let i = 0; i < 50; i++) {
        console.log(data[i].title);
        const li = document.createElement("li");
        li.style.id = data[i].id;
        li.innerHTML = data[i].title;
        ul.appendChild(li);
      }
    });
}

ul.onclick = function (event) {
  console.log(uri + "/" + event.target.style.id);
  if (!event.target.classList.contains("checked")) {
    event.target.classList.add("checked");
    check(uri, event, true);
  } else {
    event.target.classList.remove("checked");
    check(uri, event, false);
  }
};

function check(uri, event, boolean) {
  fetch(uri + "/" + event.target.style.id, {
    method: "PATCH",
    body: JSON.stringify({
      completed: boolean,
    }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (res, err) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

btn.onclick = function () {
  console.log(input.value);
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: input.value,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const li = document.createElement("li");
      li.style.id = data;
      li.innerHTML = data.title;
      ul.appendChild(li);
    });
};








