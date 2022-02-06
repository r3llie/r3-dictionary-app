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
          <Dictionary defaultKeyword="music" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="https://linktr.ee/r3llie">@r3llie</a> and is <a href="https://github.com/r3llie/r3-dictionary-app">
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
