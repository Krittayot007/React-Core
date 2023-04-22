function ProductItem({ name, price, desc }) {
    return (
        <>
            <h1>Product Name:{name}</h1>
            <h2>Price: {price}</h2>
            <p>Description: {desc}</p>
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
