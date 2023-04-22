function ProductItem(props) {
    return (
        <>
            <h1>Product Name:{props.name}</h1>
            <h2>Price: {props.price}</h2>
            <p>Description: {props.desc}</p>
        </>
    );
}


// Render

function App() {
  return (
    <div className="container">
        <ProductItem
        name="iPhone 14 Pro Max"
        price={44900}
        desc='Very good'
        />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
