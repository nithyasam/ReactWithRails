class Menu extends React.Component {
  render () {
    return (
      <div>
        <div>Date: {this.props.date}</div>
        <div>Name: {this.props.name}</div>
        <div>Is Present: {this.props.isPresent}</div>
        <div>Price: {this.props.price}</div>
      </div>
    );
  }
}

Menu.propTypes = {
  date: PropTypes.node,
  name: PropTypes.node,
  isPresent: PropTypes.node,
  price: PropTypes.node
};

