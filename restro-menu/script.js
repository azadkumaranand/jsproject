let menuItems = [
    {
        pdname: "Burgger",
        foodtype: 'lunch',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 50,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger7",
        foodtype: 'dinner',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 55,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger2",
        foodtype: 'breakfast',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 150,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger3",
        foodtype: 'lunch',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 23,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger4",
        foodtype: 'lunch',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 82,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger 5",
        foodtype: 'dinner',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 74,
        image: 'images/burger.jpeg'
    },
    {
        pdname: "Burgger 6",
        foodtype: 'Shakes',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias',
        price: 96,
        image: 'images/burger.jpeg'
    },
];

const menuBarList = document.querySelectorAll('.menu-list ul li');
const menuItemsBox = document.querySelector('.menu-items-box')

menuItems.forEach(e => {
    menuItemsBox.innerHTML += `<div class="menu-box">
    <div class="card-img">
        <img src="images/burger.jpeg">
    </div>
    <div class="card-content">
        <div class="item-name">
            <p>${e.pdname}</p>
            <p>$${e.price}</p>
        </div>
        <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias
        </div>
    </div>
</div>`;
});

// console.log(menuBarList[1].innerText);
menuBarList.forEach(listItem => {
    listItem.addEventListener('click', ()=>{
        const filterItems = menuItems.filter((item)=>{
            if (listItem.innerText.trim().toLowerCase() == 'all') {
                return item;
            }else{
                return item.foodtype.trim().toLowerCase() == listItem.innerText.trim().toLowerCase();
            }
        });
        menuItemsBox.innerHTML = '';
        filterItems.forEach(e => {
            menuItemsBox.innerHTML += `<div class="menu-box">
            <div class="card-img">
                <img src="images/burger.jpeg">
            </div>
            <div class="card-content">
                <div class="item-name">
                    <p>${e.pdname}</p>
                    <p>$${e.price}</p>
                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti explicabo quasi sequi minus pariatur laboriosam id molestias vel a alias
                </div>
            </div>
        </div>`;
        });
    })
});


// let a = "azad";

// console.log(a);

// a="sultan";

// console.log(a)

const array = [20, 5, 74, 744, 12, 10, 17, 85, 16];

const newFilterArray = array.filter((item)=>{
    return item>18;
});

console.log(newFilterArray);