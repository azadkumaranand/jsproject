const person = [
  {
    name: "Josef Morfi",
    profesion: "Web Dev",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore delectus expedita nobis? Facilis repellat adipisci sequi fuga laudantium ut maxime hic corrupti dolorem veritatis ab consequuntur delectus, soluta esse. Delectus, ab! Iusto dicta, eveniet, beatae facilis optio vero, adipisci quos aliquam id doloribus numquam nemo veritatis? Natus eum quis tenetur?",
    image: "images/img1.jpeg",
  },
  {
    name: "Susmita Singh",
    profesion: "Web Dev",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore delectus expedita nobis? Facilis repellat adipisci sequi fuga laudantium ut maxime hic corrupti dolorem veritatis ab consequuntur delectus, soluta esse. Delectus, ab! Iusto dicta, eveniet, beatae facilis optio vero, adipisci quos aliquam id doloribus numquam nemo veritatis? Natus eum quis tenetur?",
    image: "images/img4.jpeg",
  },
  {
    name: "Rishu Raj",
    profesion: "Software Dev",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore delectus expedita nobis? Facilis repellat adipisci sequi fuga laudantium ut maxime hic corrupti dolorem veritatis ab consequuntur delectus, soluta esse. Delectus, ab! Iusto dicta, eveniet, beatae facilis optio vero, adipisci quos aliquam id doloribus numquam nemo veritatis? Natus eum quis tenetur?",
    image: "images/img5.jpeg",
  },
];

const crouselBox = document.querySelector(".crousel-box1");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

let length = person.length;

crouselBox.innerHTML = `<div class="coursel-img-box">
    <img src="${person[index].image}" alt="">
    </div>
    <p>${person[index].name}</p>
    <p>${person[index].profesion}</p>
    <p>${person[index].about}</p>`;

next.addEventListener("click", function () {
    if (index < (length-1)) {
        index++;
    }else{
        index= 0;
    }
//    index++;
   console.log(index)
    crouselBox.innerHTML = `<div class="coursel-img-box">
    <img src="${person[index].image}" alt="">
    </div>
    <p>${person[index].name}</p>
    <p>${person[index].profesion}</p>
    <p>${person[index].about}</p>`;
});
prev.addEventListener("click", function () {
    if (index > 0) {
        index--;
    }else{
        index= length;
    }
//    index++;
   console.log(index)
    crouselBox.innerHTML = `<div class="coursel-img-box">
    <img src="${person[index].image}" alt="">
    </div>
    <p>${person[index].name}</p>
    <p>${person[index].profesion}</p>
    <p>${person[index].about}</p>`;
});
