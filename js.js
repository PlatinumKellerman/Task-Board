const refs = {
    input: document.querySelector('#inputText'),
    inputButton: document.querySelector('#inputButton'),
    removeButton: document.querySelector('#allClearButton'),
    list: document.querySelector('.task-list'),
    listItems: document.querySelector('.list-item'),
    form: document.querySelector('#form')
}
let keyControlValue;


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
        e.repeat = false;
        keyControlValue = e.key;
    }
}

refs.list.addEventListener('click', onListItemRemoveClick)
function onListItemRemoveClick(e) {
    if (keyControlValue = e.key & e.target.classList.contains('list-item')) {
        refs.listItems.innerHTML = "";
    }   
}

addEventListener('keyup', onControlKeyUnpress)
function onControlKeyUnpress(e) {
    if (keyControlValue = e.key) {
        let keyControlValue;
    }
}
