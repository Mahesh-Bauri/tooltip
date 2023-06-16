import "./App.scss";
import Tooltip from "./component/tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip position="top" text="I am tooltip">
        <button>Hover me!</button>
      </Tooltip>
    </div>
  );
}

export default App;
