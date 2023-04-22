
let height = 1.75;
let weight = 69;

function calcBMI(height,weight) {
    return weight / (height**2);
}

const bmi = calcBMI(height,weight);
// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(bmi);