const menubar = document.querySelector('.menubar');
const nav_links = document.querySelector('.nav_links ul');

console.log("hello gyys")

menubar.addEventListener('click', ()=>{
    // nav_links.style.display = "block";
    // if (nav_links.style.display=="block") {
    //     nav_links.style.display="none";
    //     menubar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    // }else{
    //     nav_links.style.display = "block";
    //     menubar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // }

    //show and hide navbar using height

    // nav_links.style.height = '';

    if (nav_links.style.height == "230px") {
        nav_links.style.height = '0px';
        menubar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }else{
        nav_links.style.height = '230px';
        menubar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
})