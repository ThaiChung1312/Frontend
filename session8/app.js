// console.log(name[0]);

// const app = document.getElementById("app1");
// console.log(app);

// const name1 = document.getElementsByClassName("div1");
// console.log(name1[0]);

// const divList = document.getElementsByTagName("div");
// console.log(divList);

// // lay theo query va querySelectorAll
// const query = document.querySelector("#app");
// console.log(query);

// const queryAll = document.querySelectorAll(".div-1");
// console.log(queryAll);

// //
// console.dir(app);

// //text and content

// console.log(app.innerHTML);
// app.innerHTML = "<b> ggggg</b>"
// console.log(app.innerText);
// app.innerText = "<i>Chao buoi toi </i>"
// console.log(app.textContent);
// app.textContent = "<b>good morning<b>"


// console.log(app.style);

// console.log(app.style.backgroundColor);
// app.style.backgroundColor = "pink";



//Cho 1 the div chua noi dung ben trong. Sau do thay doi mau noi dung va in dam no

//Cho 3 the div, lay tat ca cac phan tu cua no va thay doi mau sac cua tung phan tu


// const ten = document.getElementById("ten");
// console.log(ten.innerHTML);
// ten.innerHTML = "<b> GOODDDDDDDD</b>"
// // ten.style.fontWeight = "Bold"
// // ten.style.fontSize = "50px"
// ten.style.color = "#f84"




// const ul = document.getElementById("list");
// // console.log(ul);
// console.log(ul.children);

// const li = ul.children[0];
// console.log(li.parentElement);

// console.log(ul.id);
// console.log(ul.classList);

// ul.classList.add("cl4")
// console.log(ul);

// ul.classList.remove("cl3")
// console.log(ul);



// const ul = document.getElementById("list");

// const li = ul. children[0];
// console.log(li);
// li.remove(li);

// const newLi = document.createElement("li");
// ul.appendChild(newLi);

// newLi.innerHTML = "GOODGAME";


// const btn = document.getElementById("btn");
// // console.log(btn);
// btn.onclick = function(){
//     alert`Hello`
// }

// 1 Cho 1 the div va button sau khi click vao button thi thay doi noi dung, cow chu, mau sac cua the div

// const btn = document.getElementById("btn");
// const div = document.getElementById("div1");


// btn.onclick = function(){
//     div.innerText = "GOOD"
//     div.style.color = "green"
//     div.style.fontSize = "23px"
// }
// 2 Cho 1 list danh sach li, 1 button add, 1 button remove click btn add thi them 1 phan tu vao danh sach
//Click remove thi xoa bo phan tu dau tien cua danh sach


// 1
const btn1 = document.getElementById("btn1");
const txt = document.getElementById("txt");
btn1.onclick=function(){
    if(txt.style.display =="none"){
        txt.style.display= "block";
    }else{
        txt.style.display="none";
    }
}

// 2
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    btn2.style.backgroundColor = "#" + randomColor;
}
  btn2.addEventListener("click", setBg);
  setBg();

//3
  const x = document.getElementById("dn1");
  const y = document.getElementById("dn2");
  const btn3 = document.getElementById("btn3");

  let c =""
  btn3.onclick = function(){
   console.log(x.textContent);
   console.log(y.textContent);
   c = x.textContent
   x.innerText = y.textContent;
   y.innerText = c;

  }

//4
  var n = 14;
  const btn4 = document.getElementById("btn4");
  const text1 = document.getElementById("font14");
  btn4.onclick =function(){
    n++;
    text1.style.fontSize = n+"px";
    console.log(text1.textContent);
  }



  











