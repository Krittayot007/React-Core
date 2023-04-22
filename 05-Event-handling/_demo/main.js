
// Render

function App() {
    // #1 Do logic 
    const handleClick = () => {
        console.log('Click');
    }
    return (
        <div className='container'>
            <h1>Event Handler</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);