var items = document.querySelectorAll(".item");
var btn = document.querySelector("#btn");
var wrap = document.querySelector('.wrap');

items.forEach((li) =>
    li.addEventListener('click', () => {
       items.forEach(i => i.classList.remove("active"))
       li.classList.add("active");
   })
);

btn.addEventListener('click' , () =>{
     wrap.classList.toggle('try');
     btn.classList.toggle('try');
})

