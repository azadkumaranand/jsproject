const submitBtn = document.querySelector('#submit-btn');
const inputField = document.querySelector('.inputField');

const itemTable = document.querySelector('.items-table');
let editable = false;
let itemForEdit = '';

const editItem = (e, id) => {
    editable = true;
    submitBtn.innerText = 'Edit';
    console.log(`'${id}'`, e);
    itemForEdit = document.getElementById(id);
    console.log(itemForEdit);
    inputField.value = e;
    inputField.addEventListener('input', ()=>{
        submitBtn.innerText = 'Save';
    });
}
let count = 0;
submitBtn.addEventListener('click', ()=>{
    let item = inputField.value.trim();
    if (!editable) {
        count++;
        itemTable.innerHTML += `<tr>
            <td id='${count}'>${item}</td>
            <td onclick="editItem('${item}', count)">Edit</td>
            <td onclick="deleteItem('${item}')">Delete</td>
        </tr>`;
    }else{
        itemForEdit.innerText = item;
        submitBtn.innerText = 'Submit';
        editable = false;
    }
    
    inputField.value = '';
})
