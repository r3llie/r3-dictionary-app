import "./App.css";
import logo from "./logo.jpeg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="autism"/>
        </main>
        <footer className="App-footer">
          <small>Coded by @r3llie</small>
        </footer>
      </div>
    </div>
  );
}
