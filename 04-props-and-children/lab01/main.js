
// Render

function Profile({ name, age }) {
    // console.log(props);
    return (
        <>
            <h1>Fullname : {name}</h1>
            <h2>Age : {age}</h2>
        </>
    );
}

function App() {
    return ( 
        <div className='container'>
            <Profile name='John Doe' age={27}/>
            <Profile name='Mark Ruffalo' age={30}/>
        </div>

    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);