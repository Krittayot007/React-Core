const App = (
  <div className="main">
    <div className="main__left">
      <img src="./banner.png"></img>
    </div>
    <div className="main__right">
      <div className="main__right--header">
        <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>
      </div>
      <div>
        <div className="main__right--content">
          <p>
            Welcome to Hensui, the newest addition to the vibrant Los Angeles
            dining scene! Our restaurant is dedicated to bringing you the most
            authentic and delicious Japanese cuisine.
          </p> 
          <br/>
          <p>
            Stay tuned for our grand
            opening date, sign up with your e-mail address to get notified.
          </p>
          
        </div>
        <form>
          <input type="text" placeholder=" e-mail" className="form-input"></input>
          <input type="submit" value="SUBMIT" className="form-btn" />
        </form>
      </div>
    </div>
  </div>
);

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
