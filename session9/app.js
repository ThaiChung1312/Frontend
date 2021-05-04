// const form = document.getElementById("form");
// const ul = document.getElementById("ul");

// form.onsubmit = function (event){
//     event.preventDefault();
//     //B1 lay gia tri tu input
//     console.log(form.namespaceURI.value);

//     // B2 Tao the li
//     const li = document.createElement("li");
//     // B3 Gan gia tri cua input vao li
//     li.innerText = form.name.value
//     const btn = document.createElement("button");
//     btn.classList.add("btn");
//     btn.innerText = "Delete"
    
//     // B4 appen li vao ul
//     ul.appendChild(li);
//     li.appendChild(btn);
//     // btn.onclick = function(){
//     //     li.remove();
//     // }
   

// ul.onclick = function(event){
//     if(event.target.classList.contains("btn")){
//         event.target.parentElement.remove();
//     }
// };
//     li.onclick = function(){
//         if(li.style.textDecoration == "line-through"){
//             li.style.textDecoration = "none"
//         }else{
//             li.style.textDecoration = "line-through"
//         }
//     };
// };