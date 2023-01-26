/* eslint-disable no-plusplus */
import './style.css';

const list = [
  {
    index: '',
    completed: false,
    Description: 'Morning fellowship',
  },
  {
    index: '',
    completed: false,
    Description: 'microverse morning session',
  },
  {
    index: '',
    completed: false,
    Description: 'Have breakfast',
  },
];
function renderbooks() {
  list.forEach((items) => {
    document.getElementById('table').innerHTML += `<tr class="tr">
        <td><input type="checkbox"></td><td class="desc" id=${items.index}>${items.Description}</td> <td><i class="fa-solid fa-ellipsis-vertical"></i></td></tr>
        <tr  class="tr">`;
  });
}
renderbooks();
