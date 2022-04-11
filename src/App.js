import "./App.scss";

//components
import Card from "./Card/Card";

function App() {
  return (
    <div className="App">
      <img
        src={process.env.PUBLIC_URL + "/bg-top.svg"}
        alt="top"
        className="top"
      />
      <img
        src={process.env.PUBLIC_URL + "/bg-bottom.svg"}
        alt="bottom"
        className="bottom"
      />
      <h1>Our Pricing</h1>
      <Card />
    </div>
  );
}

export default App;
