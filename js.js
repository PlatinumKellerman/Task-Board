const refs = {
    input: document.querySelector('#inputText'),
    inputButton: document.querySelector('#inputButton'),
    removeButton: document.querySelector('#allClearButton'),
    list: document.querySelector('.task-list'),
    listItems: document.querySelector('.list-item'),
    form: document.querySelector('#form')
}

refs.form.addEventListener('submit', onInputTextSubmit)
refs.inputButton.addEventListener('click', onButtonClick)
refs.removeButton.addEventListener('click', onRemoveButtonClick)
refs.list.addEventListener('click', onListItemClick)



function onListItemClick(event) {
    event.target.classList.toggle("list-item__added");
}

function onButtonClick(e) {
    e.preventDefault();
    if (refs.input.value || refs.listItems) {
    const liItem = document.createElement('li');
        liItem.textContent = refs.input.value;
        refs.list.append(liItem);
        liItem.classList.add('list-item');
        refs.input.value = "";
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
