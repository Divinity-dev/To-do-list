/* eslint-disable no-plusplus */
import './style.css';
import { task, ToLocalStorage } from './function.js';

let list = [];
function renderTasks() {
  list = JSON.parse(localStorage.getItem('Data'));
  document.getElementById('table').innerHTML += '';
  list.forEach((items) => {
    if (localStorage.getItem('Data') !== null) {
      if (document.getElementById('todo').checked) {
        task.completed = true;
        document.getElementById('table').innerHTML += `<tr class="tr check">
          <td><input type="checkbox" id='todo'></td><td class="desc" id=${items.index}>${items.Description}
          </td> <td><i class="fa-solid fa-ellipsis-vertical"></i></td></tr>
          <tr  class="tr">`;
      } else {
        task.completed = true;
        document.getElementById('table').innerHTML += `<tr class="tr">
      <td><input type="checkbox" id='todo'></td><td class="desc" id=${items.index}>${items.Description}
      </td> <td><i class="fa-solid fa-ellipsis-vertical"></i></td></tr>
      <tr  class="tr">`;
      }
    }
  });
}
const Task = document.getElementById('enter');
renderTasks();
document.getElementById('plus').onclick = () => {
  task.Description = Task.value;
  task.index = list.length;
  list.push(task);
  Task.value = '';
  ToLocalStorage(list);
  renderTasks();
};
function removetask() {
  list.filter(() => task.completed === false);
}
document.getElementById('btn').onclick = () => {
  list = JSON.parse(localStorage.getItem('Data'));
  removetask();
  ToLocalStorage(list);
};
