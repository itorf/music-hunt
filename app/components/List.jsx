var React = require('React');
var ListItem = require('./ListItem.jsx');
// var nuclear = require('nuclear-js');
// var Reactor = nuclear.Reactor;

var List = React.createClass({
  // TODO: implementing Nuclear framework. Mixins??
  // mixins: [reactor.ReactMixin],
  //
  // getDataBindings() {
  //   return {
  //     items:
  //   }
  // },

  render() {
    console.log('this is happening');
    console.log(this.props);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          List of Songs
        </div>
        <div className="panel-body">
          {this.props.items.map(function(item, index) {
            console.log(item);
            return <ListItem item={item} key={'songs' + index}/>;
          })
          }
        </div>
      </div>
    );
  }
});

module.exports = List;
