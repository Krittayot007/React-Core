
let list1 = React.createElement('li', null, 'How to create and nest components');
let list2 = React.createElement('li', null, 'How to add markup and styles');
let list3 = React.createElement('li', null, 'How to display data');
let list4 = React.createElement('li', null, 'How to render conditions ans lists');
let list5 = React.createElement('li', null, 'How to respond to events and update the screen');
let list6 = React.createElement('li', null, 'How to share data between components');
let lists = React.createElement('ul', {className: "lists"}, list1, list2, list3, list4, list5, list6);
let card = React.createElement('h2', {className: "card_in"}, 'You will learn', lists);

const linkEl = React.createElement('a', {className: 'link'}, 'LEARN REACT >');
const header = React.createElement('h1', {className: 'header'}, 'Quick Start');
const content = React.createElement('p', {className: 'content'}, 'Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.');
const box = React.createElement('div', {className: "box"}, linkEl, header, content, card);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(box);