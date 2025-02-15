const inputBox = document.getElementById('box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input box after adding the task
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    listContainer.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
        }
    }, false);
}