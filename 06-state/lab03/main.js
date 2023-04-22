
// Render

function App() {
    const [isShow, setIsShow] = React.useState(true);
    const handleToggle = () => {
        setIsShow(!isShow);
    } 
    let text = `${isShow ? 'HIDE' : 'SHOW'}`
    return (
        <div className='container'>
            <button onClick={handleToggle}>{text}</button>
            {isShow && <p>Lorem ipsum dolar sit</p>}
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);