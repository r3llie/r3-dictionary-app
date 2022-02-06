import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

 function load() {
     setLoaded(true);
     Search();
 }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="form">
            <input type="search" onChange={handleKeywordChange}
            inputvalue={props.defaultKeyword} />
          </form>
          <div className="hint">
            Suggested words: dance, music, cup, summer, joke...
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
      load()
      return "Loading";
  }
}
