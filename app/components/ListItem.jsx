var React = require('react');

var ListItem = React.createClass({
  render() {
    return(
      <div>{this.props.item.title}</div>
    )
  }
});

module.exports = ListItem;
