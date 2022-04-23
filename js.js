const refs = {
    input: document.querySelector('#inputText'),
    inputButton: document.querySelector('#inputButton'),
    removeButton: document.querySelector('#allClearButton'),
    list: document.querySelector('.task-list'),
    listItems: document.querySelector('.list-item')
}

refs.input.addEventListener('input', onInputText)
refs.inputButton.addEventListener('click', onButtonClick)
refs.removeButton.addEventListener('click', onRemoveButtonClick)
refs.list.addEventListener('click', onListItemClick)



function onListItemClick(event) {
    event.target.classList.toggle("list-item__added");
}





function onButtonClick() {
    if (refs.input.value) {
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

function onInputText() {
    
}


