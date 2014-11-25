function roll(range) {
	return Math.floor(Math.random()*range);
}

var MenuEntry = React.createClass({displayName: 'MenuEntry',
	render: function() {
		return (
			React.createElement("tr", null, 
				React.createElement("td", null, this.props.name), 
				React.createElement("td", null, this.props.price), 
				React.createElement("td", null, this.props.qty)
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
			React.createElement("table", null, 
				React.createElement("tr", null, 
					React.createElement("td", null, "Name"), 
					React.createElement("td", null, "Price"), 
					React.createElement("td", null, "Qty")
				), 
				items
			)
		);
	}
});

React.render(
  React.createElement(Menu, {items: itemi}),
  document.getElementById('example')
);

