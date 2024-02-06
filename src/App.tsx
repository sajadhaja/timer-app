import "./App.css";
import TimerWrapper from "./components/complex/TimerWrapper/TimerWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerWrapper count={10}></TimerWrapper>
      </header>
    </div>
  );
}

export default App;
