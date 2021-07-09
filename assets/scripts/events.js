
// coknst disabledInput = event => {
//   setTimeout(()=>{
//   event.target.disabled = true; 
// }, 3000)
// }



// const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

// const buttonClickHandler = event => {
  // event.target.disabled = true;
// }

// const anotherButtonClickHandler = () => {
//   console.log('This was clicked!');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// for( btn of buttons){
  // btn.addEventListener('click',buttonClickHandler)
// }



// window.addEventListener('scroll', (e) => console.log(e.path))

const div = document.querySelector('div');
div.addEventListener('click', e => {
  console.log('Div Clicked')
  console.log(e);
});


const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button Clicked')
  console.log(e);
});


const form = document.querySelector('form');

form.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e)
});


const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((li) => {
//   li.addEventListener('click', (e) => {
//     e.target.classList.toggle('highlight')
//   });
// });

list.addEventListener('click',(e)=>{
  e.target.closest('li').classList.toggle('highlight');
  button.click()
  // form.submit()
});





// drag.addEventListener('drag', (e)=>{
//   dragDiv.append(e)
// })