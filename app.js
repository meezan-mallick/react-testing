{
  /* 
<div id="parent">
  <div id="child">
        <h2>hello world</h2>
  </div>
</div> 
*/
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h2", {}, "hii")
  )
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(parent);
