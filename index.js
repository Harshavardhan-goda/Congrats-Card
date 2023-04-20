const element = (
  // Write your code here.
  <div className="container">
    <h1 className="head">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="card-head">Kiran V</h1>
      <p className="card-para">
        Vishnu institute of Educational and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
