const App = (
  <>
    <label htmlFor="username">Username</label>
    <input className="username" id="username" name="username" />
  </>
);
// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
