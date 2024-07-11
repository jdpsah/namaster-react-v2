const heading = React.createElement('h1', {}, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', { id: "h1" }, "test h1")));
root.render(parent);