const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toogle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-bar"),
modeSwitch = body.querySelector(".toogle-switch"),
modeTxt = body.querySelector(".txt-mode");

modeSwitch.addEventListener('click',()=>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeTxt.innerHTML = "Light Mode";
    }else{
        modeTxt.innerHTML = "Dark Mode";
    }
})

toogle.addEventListener('click',()=>{
    sidebar.classList.toggle("close");
})
searchBtn.addEventListener('click',()=>{
    sidebar.classList.remove("close");
})
