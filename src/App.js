import React from "react";
import ReactDOM from "react-dom";

//components
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
