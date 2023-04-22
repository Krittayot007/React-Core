let fullName = "Krittayot Sombatsiri";
let bitrhDay = 1995;
let CURRENT_YEAR = 2023;
let img = 'https://cdn.pixabay.com/photo/2017/04/05/01/15/ocean-2203720_1280.jpg';

const App = (
<>
    <h1>{fullName}</h1>
    <p>{CURRENT_YEAR - bitrhDay}</p>
    <img src={img}/>
</>

);


// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);