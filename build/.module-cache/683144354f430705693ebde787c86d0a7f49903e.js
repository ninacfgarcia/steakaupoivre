
var Menu = React.createClass({displayName: 'Menu',
	getInitialState: function(){
		return {foo: 'bar', color: 'red', qty: 10};
	},
	render: function() {
		return (
			React.createElement("div", null, 
			React.createElement("div", null, this.state.qty)
			)
		);
	}
});

React.render(
  React.createElement(Menu, null),
  document.getElementById('example')
);

