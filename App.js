const heading = React.createElement("h1", {}, "This is React");

const child = React.createElement("div", {id:'child'}, "This is child")

const parent = React.createElement("div", { id: "parent" }, [heading, child]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
