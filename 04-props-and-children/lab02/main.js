
// // Render

// function App() {
//     return <div className='container'>Lab</div>
// }

// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);
// root.render(<App />);

function Car(props) {
    console.log(props.brand); // * Honda
    console.log(props.price); // ** 1000000
    console.log(props.color); // *** undefined
    return <div>Car</div>;
  }
  ReactDOM.render(<Car brand="Honda" price="1000000" />, document.getElementById('root'));
  