// eslint-disable-next-line prefer-const, no-unused-vars
import './style.css';

const list = [
  {
    index: 1,
    completed: false,
    Description: 'Morning fellowship',
  },
  {
    index: 2,
    completed: false,
    Description: 'microverse morning session',
  },
  {
    index: 3,
    completed: false,
    Description: 'Have breakfast',
  },
];
document.getElementById('id1').innerHTML = list[0].Description;
document.getElementById('id2').innerHTML = list[1].Description;
document.getElementById('id3').innerHTML = list[2].Description;