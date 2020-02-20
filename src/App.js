import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Khaleesi" animal="dog" breed="doberman" />
      <Pet name="Monty" animal="snake" breed="ball python" />
      <Pet name="holly" animal="dog" breed="dachsund" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
