const input = document.querySelector('#inpu-field');

const table = document.querySelector('.table');
const button = document.querySelector('.button');


button.addEventListener('click', ()=>{
    let val = input.value;
    console.log(val);
    table.innerHTML = table.innerHTML + `<tr>
    <td style="width: 85%;">${val}</td>
    <td style="width: 7.5%; color: green;"><i class="fa-solid fa-pen-to-square"></i></td>
    <td style="width: 7.5%; color: red;"><i class="fa-solid fa-trash"></i></td>
    </tr>`;
    input.value = '';
})