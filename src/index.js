/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-loop-func */
/* eslint-disable indent */
/* eslint-disable no-plusplus */

import './style.css';

const ToLocalStorage = (tasks) => {
  localStorage.setItem('to-do', JSON.stringify(tasks));
};
let list;
let x = 0;
let y = 0;
let z = 0;
function renderTasks() {
  list = JSON.parse(localStorage.getItem('to-do')) || [];
  document.getElementById('table').innerHTML += '';
  list.forEach((items) => {
    if (items.completed) {
      document.getElementById('table').innerHTML += `<tr class="tr check"id=${items.index} >
          <td><input type="checkbox" class='todo' data-index = "${z++}" ></td><td class="desc" contenteditable="true" data-index = "${y++}" >${items.Description}
          </td> <td><i class="fa-solid fa-ellipsis-vertical" id="${x++}"></i></td></tr>
          <tr  class="tr">`;
    } else {
      document.getElementById('table').innerHTML += `<tr class="tr"id=${items.index} >
      <td><input type="checkbox" class='todo' data-index = "${z++}" ></td><td class="desc" contenteditable="true" data-index = "${y++}" >${items.Description}
      </td> <td><i class="fa-solid fa-ellipsis-vertical" id="${x++}"></i></td></tr>
      <tr  class="tr">`;
    }
  });
}
renderTasks();
const activity = document.getElementById('enter');
document.getElementById('plus').onclick = () => {
  list.push({ completed: false, index: list.length, Description: activity.value });
  ToLocalStorage(list);
  activity.value = '';
  window.location.reload();
};

const removeTask = (index) => {
  list.splice(index, 1);
  ToLocalStorage(list);
};

document.getElementById('table').onclick = (e) => {
  if (e.target.className === 'fa-solid fa-ellipsis-vertical') {
    removeTask(e.target.getAttribute('id'));
    const parentContainer = e.target.parentElement.parentElement.parentElement;
    const parentToRemove = e.target.parentElement.parentElement;

    parentContainer.removeChild(parentToRemove);
   }
};
document.getElementById('table').onkeyup = (e) => {
  if (e.target.className === 'desc') {
    const index = e.target.getAttribute('data-index');
    list[index].Description = e.target.innerHTML;
    ToLocalStorage(list);
   }
};
document.getElementById('table').onchange = (e) => {
  if (e.target.className === 'todo') {
    if (e.target.checked) {
      e.target.parentElement.nextElementSibling.style.textDecoration = 'line-through';
      const index = e.target.getAttribute('data-index');
      list[index].completed = true;
      ToLocalStorage(list);
    } else {
      e.target.parentElement.nextElementSibling.style.textDecoration = 'none';
      const index = e.target.getAttribute('data-index');
      list[index].completed = false;
      ToLocalStorage(list);
    }
   }
};
document.getElementById('btn').onclick = () => {
const uncompleted = list.filter((list, index) => !list[index].completed);
list = uncompleted;
ToLocalStorage(list);
window.location.reload();
};