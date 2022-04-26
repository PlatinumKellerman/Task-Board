const refs = {
    input: document.querySelector('#inputText'),
    inputButton: document.querySelector('#inputButton'),
    removeButton: document.querySelector('#allClearButton'),
    list: document.querySelector('.task-list'),
    form: document.querySelector('#form')
}

refs.form.addEventListener('submit', onInputTextSubmit)
refs.inputButton.addEventListener('click', onButtonClick)
refs.removeButton.addEventListener('click', onRemoveButtonClick)
refs.list.addEventListener('click', onListItemClick)


function onButtonClick(e) {
    e.preventDefault();
    if (refs.input.value) {
    const liItem = document.createElement('li');
        liItem.textContent = refs.input.value;
        liItem.setAttribute("title", "To delete this element press 'Control' + 'Click'")
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

refs.list.addEventListener('click', onListItemRemoveClick)
function onListItemRemoveClick(e) {
    if (e.ctrlKey & e.target.classList.contains('list-item', 'list-item__added')) {
            e.target.remove();
    }
}