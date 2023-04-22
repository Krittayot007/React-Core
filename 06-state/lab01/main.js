
// Render

function App() {
    const[isShow, setIsShow] = React.useState(true);
    // let isShow = true;
    const handleClickToHide = () => {
        setIsShow(false);
    }
    return (
        <div className='container'>
            <div>{isShow && <button onClick={handleClickToHide}>Click to Hide me</button>}</div>
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);