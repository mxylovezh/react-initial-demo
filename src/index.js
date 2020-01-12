const React = window.React;
const ReactDOM = window.ReactDOM;
let n = 0;
const root = document.querySelector("#root");
const App = () => React.createElement("div", { className: "red" }, [
  n,
  React.createElement(
    "button",
    {
      onClick: () => {
        n += 1;
        console.log(n) // 精髓
        ReactDOM.render(App(), root);
      }
    },
    "+1"
  )
]);

ReactDOM.render(App(), root);
