import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "This is React");

const child = React.createElement("div", { id: "child" }, "This is child");

const parent = React.createElement("div", { id: "parent" }, [heading, child]);

const Title = () => <h1>This is a pure component</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React Functional Component</h1>
      <Title />
      {Title()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
