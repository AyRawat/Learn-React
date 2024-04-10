const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "Sibling component"),
  ]),
);
const heading = React.createElement("h1", { id: "heading" }, "Hello Boy");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
