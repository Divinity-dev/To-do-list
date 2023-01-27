export const task = {
  index: 0,
  Description: '',
  completed: false,
};
export const ToLocalStorage = (tasks) => {
  localStorage.setItem('Data', JSON.stringify(tasks));
};