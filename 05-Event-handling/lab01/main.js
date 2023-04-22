
const handleChange = (event) => {
    console.log(event.target.value); 
}
// Render

function App() {
    return (
        <div className='container'>
            <input onChange={handleChange} />
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);