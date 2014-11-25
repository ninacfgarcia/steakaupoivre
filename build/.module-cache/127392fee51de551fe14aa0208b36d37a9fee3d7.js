function roll(range) {
	return Math.floor(Math.random()*range);
}

var MenuEntry = React.createClass({displayName: 'MenuEntry',
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("div", {name: this.props.name}), 
				React.createElement("div", {price: this.props.price}), 
				React.createElement("div", {qty: this.props.qty})
			)
		);
	}
});


var itemi = [{name: 'foo', price: 2, qty: roll(10)},
{name: 'foo2', price: 2, qty: roll(10)}];

var Menu = React.createClass({displayName: 'Menu',
	render: function() {
		var items = this.props.items.map(function(item){
			return React.createElement(MenuEntry, {name: item.name, price: item.price, qty: item.qty});
		});

		return (
			React.createElement("div", null, 
				React.createElement("div", null, 
					React.createElement("div", null, "Name"), 
					React.createElement("div", null, "Price"), 
					React.createElement("div", null, "Qty")
				), 
				React.createElement("div", null, 
					items
				)
			)
		);
	}
});

React.render(
  React.createElement(Menu, {items: itemi}),
  document.getElementById('example')
);

