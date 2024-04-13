const input = document.querySelector('#inpu-field');

const table = document.querySelector('.table-body');
const button = document.querySelector('.button');

let editeitem = null;

function editcontent(id) {
    editeitem = document.getElementById(`${id}`);
    input.value = editeitem.innerText;
    // console.log(typeof(id))
    // let editeitem = document.querySelector(`#${id}`);
}

let val = input.value;
console.log("inputvalue: ", val);
let count = 1;
button.addEventListener('click', ()=>{
    let val = input.value;
    // console.log(val);
    if (editeitem) {
        editeitem.innerHTML = val;
        editeitem = null;
    }else{
        table.innerHTML += `<tr>
        <td style="width: 85%;" id="${count}">${val}</td>
        <td style="width: 7.5%; color: green;"><i class="fa-solid fa-pen-to-square" onclick="editcontent(${count})"></i></td>
        <td style="width: 7.5%; color: red;"><i class="fa-solid fa-trash"></i></td>
        </tr>`;
        count++;
    }
    
    input.value = '';
})