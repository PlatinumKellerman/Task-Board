const refs = {
    input: document.querySelector('#inputText'),
    inputButton: document.querySelector('#inputButton'),
    removeButton: document.querySelector('#allClearButton'),
    list: document.querySelector('.task-list'),
    form: document.querySelector('#form')
}
const listItems = refs.list.children;
let keyControlValue = "";


refs.form.addEventListener('submit', onInputTextSubmit)
refs.inputButton.addEventListener('click', onButtonClick)
refs.removeButton.addEventListener('click', onRemoveButtonClick)
refs.list.addEventListener('click', onListItemClick)


function onButtonClick(e) {
    e.preventDefault();
    if (refs.input.value) {
    const liItem = document.createElement('li');
        liItem.textContent = refs.input.value;
        refs.list.append(liItem);
        liItem.classList.add('list-item');
        refs.input.value = "";
    }
}

function onListItemClick(evt) {
    if (evt.target.classList.contains('list-item')) {
    evt.target.classList.toggle('list-item__added'); 
    }
}

function onRemoveButtonClick() {
    refs.list.innerHTML = "";
}

function onInputTextSubmit(event) {
    event.preventDefault();
    if (refs.input.value) {
    const liItem = document.createElement('li');
        liItem.textContent = refs.input.value;
        refs.list.append(liItem);
        liItem.classList.add('list-item');
        refs.input.value = "";
    }
}

addEventListener('keydown', onControlKeyPress);
function onControlKeyPress(e) {
    if (e.ctrlKey) {
        keyControlValue = e.key;
        console.log(keyControlValue);
    }
}

refs.list.addEventListener('click', onListItemRemoveClick)
function onListItemRemoveClick(e) {
    // if (keyControlValue = e.key & e.target.classList.contains('list-item')) {
    
    // }   
    console.log(listItems);
    for (let i = 1; i < listItems.length; i++) {
    // const qqq = listItems.splice(listItems.indexOf[i], 1);
    console.log(listItems.indexOf[i]);
  }
}

addEventListener('keyup', onControlKeyUnpress)
function onControlKeyUnpress(e) {
    if (keyControlValue = e.key) {
        let keyControlValue = "";
        console.log(keyControlValue);
    }
}
