import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Khaleesi",
      animal: "Dog",
      breed: "Doberman"
    }),
    React.createElement(Pet, {
      name: "Monty",
      animal: "Snake",
      breed: "Ball Python"
    }),
    React.createElement(Pet, {
      name: "Holly",
      animal: "Dog",
      breed: "Dachsund"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
