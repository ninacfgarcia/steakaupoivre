
var menu = {foo: 'bar', color: 'red', qty: 10};

React.render(
  React.createElement("h1", null, "Hello, world!"),
  React.createElement("div", {color: menu.color}, "Hi everyone"),
  document.getElementById('example')
);

