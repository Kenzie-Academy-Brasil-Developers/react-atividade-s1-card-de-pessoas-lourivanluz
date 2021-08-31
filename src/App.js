import "./App.css";
import DeveloperCards from "./components/developer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <DeveloperCards name="lourivan" age="31" country="Brasil" />
        <DeveloperCards name="Maria Divina" age="51" country="Brasil" />
        <DeveloperCards name="Elcio" age="52" country="Brasil" />
      </div>
    </div>
  );
}

export default App;
