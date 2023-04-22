
// Render

function App() {
    const [isShow, setIsShow] = React.useState(true);
    const handleClickToHide = () => {
        setIsShow(false);
    }
    return (
        <div className='container'>
            <button onClick={handleClickToHide}>Clike to Hide TEXT</button>
            {isShow && <p>TEXT</p>}
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);