
// ######################################## 
// ###### Vanila Javascript (JS-DOM)#######
// ######################################## 

// Create UI
// const header = document.createElement('h1');
// header.innerText = 'Hello from JS-DOM';
// header.classList = 'text-blue';
// console.log(header)  // REAL DOM

// Manipulate DOM
// const root = document.getElementById('root');
// root.appendChild(header);

// ######################################## 
// ############# REACT-App-1 ##############
// ######################################## 

// Gloval object === React

// React == Create UI
// console.log(React);
// const header = React.createElement('h1', {className: 'text-red'}, 'Hello from React');
// <h1 class="text-red">Hello from React</h1>

// React DOM == manipulate DOM,render
// console.log(ReactDOM);
// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);

// root.render(header);

// ######################################## 
// ############# REACT-App-2 ##############
// ######################################## 

// App : React
let list1 = React.createElement('li', null, 'item-1');
let list2 = React.createElement('li', null, 'item-2');
let list3 = React.createElement('li', null, 'item-3');
let lists = React.createElement('ul', null, list1, list2, list3);
let card = React.createElement('h2', null, 'My lists', lists);

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(card);

// App : DOM
// const domRoot = document.getElementById('root');

// const listOne = document.createElement('li');
// listOne.textContent = 'item-1';

// const listTwo = document.createElement('li');
// listTwo.textContent = 'item-2';

// const listThree = document.createElement('li');
// listThree.textContent = 'item-3';

// const lists = document.createElement('ul');
// lists.classList.add('list-none');
// lists.appendChild(listOne);
// lists.appendChild(listTwo);
// lists.appendChild(listThree);

// const header = document.createElement('h1');
// header.classList.add('text-red', 'mb-5');
// header.textContent = 'Hi from JS-DOM!';

// const app = document.createElement('div');
// app.classList.add('text-center', 'mt-5');
// app.appendChild(header);
// app.appendChild(lists);

// domRoot.appendChild(app);