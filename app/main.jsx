var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

var ListStore = require('./stores/ListStore');
var _items = ListStore.getItems();

ListStore.onChange(function(items) {
  _items = items;
  render()
});

function render() {
  console.log('getting here');
  ReactDOM.render(<List items ={_items} />, document.getElementById('container'));
}

render();
