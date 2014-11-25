function roll(range) {
	return Math.floor(Math.random()*range);
}

var MenuEntry = React.createClass({
	propTypes: {
		iqty: React.PropTypes.number(),
		price: React.PropTypes.number(),
		name: React.PropTypes.string()
	},
	getInitialState: function(){
		return {qty: this.props.iqty};
	},
	handleClick: function(e){
		this.setState({qty: this.state.qty-1});
	},
	render: function() {
		return (
			<tr onClick={this.handleClick}>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
				<td>{this.state.qty}</td>
			</tr>
		);
	}
});

var Menu = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item){
			return <MenuEntry name={item.name} price={item.price} iqty={item.iqty} />;
		});

		return (
			<table>
				<tr>
					<td>Name</td>
					<td>Price</td>
					<td>Qty</td>
				</tr>
				{items}
			</table>
		);
	}
});

var itemi = [
{name: 'foo', price: 5, iqty: roll(10)},
{name: 'foo2', price: 1.9, iqty: roll(10)},
{name: 'foo3', price: 3.5, iqty: roll(10)},
];


React.render(
  <Menu items={itemi} />,
  document.getElementById('example')
);

