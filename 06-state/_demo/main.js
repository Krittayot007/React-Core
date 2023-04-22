
// Render

function App() {
    // # Logic
    // const myState = React.useState(0);
    // let currentState = myState[0];
    // let updateFunction = myState[1];

    const [count, setCount] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);

    // let count = 0;
    const handleClick = () => {
        // count +=1
        // console.log(count)
        let newState = count + 1;
        setCount(newState);
        setToggle(!toggle);
    }
    // # UI
    return (
        <div className='container'>
            State
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);