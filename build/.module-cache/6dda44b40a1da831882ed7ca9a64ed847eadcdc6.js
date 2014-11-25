function roll(range) {
	return Math.floor(Math.random()*range);
}

var MenuEntry = React.createClass({displayName: 'MenuEntry',
	getInitialState: function(){
		return {qty: this.props.qty};
	},
	handleClick: function(e){
		this.state.qty--;
	},
	render: function() {
		return (
			React.createElement("tr", null, 
				React.createElement("td", null, this.props.name), 
				React.createElement("td", null, this.props.price), 
				React.createElement("td", null, this.state.qty)
			)
		);
	}
});

var Menu = React.createClass({displayName: 'Menu',
	render: function() {
		var items = this.props.items.map(function(item){
			return React.createElement(MenuEntry, {name: item.name, price: item.price, qty: item.iqty});
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

var itemi = [
{name: 'foo', price: 5, iqty: roll(10)},
{name: 'foo2', price: 1.9, iqty: roll(10)},
{name: 'foo3', price: 3.5, iqty: roll(10)},
];


React.render(
  React.createElement(Menu, {items: itemi}),
  document.getElementById('example')
);

