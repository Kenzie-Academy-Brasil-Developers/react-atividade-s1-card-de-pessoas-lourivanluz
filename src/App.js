import "./App.css";
import DeveloperCards from "./components/developer";

function App() {
  const pessoas = [
    { name: "lourivan", age: "31", country: "Brasil" },
    { name: "Maria Divina", age: "51", country: "Brasil" },
    { name: "Elcio", age: "52", country: "Brasil" },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <DeveloperCards pessoa={pessoas[0]} />
        <DeveloperCards pessoa={pessoas[1]} />
        <DeveloperCards pessoa={pessoas[2]} />
      </div>
    </div>
  );
}

export default App;
