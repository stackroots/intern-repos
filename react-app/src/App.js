import "./App.css";
import NewComponent from "./NewComponent";

function App() {
  const student = "vyshnav";
  return (
    <div>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
      <div className="App">
        <h1>Hi, I'm {student}</h1>
      </div>
      <NewComponent name={"Vyshnav"} rollNo={1} />
      <NewComponent name={"Sanal"} rollNo={2} />
      <NewComponent name={"Sreerag"} rollNo={3} />
    </div>
  );
}

export default App;
