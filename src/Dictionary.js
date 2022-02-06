import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
function handlePexelsResponse(response) {
   setPhotos(response.data.photos);

}
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a70c9f661de148feafdcaa55eaf00d2e";
      let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios
          .get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
          .then(handlePexelsResponse);
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
            defaultValue={props.defaultKeyword} />
          </form>
          <div className="hint">
            Suggestions: dance, art, tea, stim, joy...
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
      load()
      return "Loading";
  }
}
