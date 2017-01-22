var dispatcher = require('../dispatcher');

function ListStore() {
  var listeners = [];
  var items = [
    {title: 'song number C'},
    {title: 'song number B'}
  ];

  function getItems() {
    return items;
  };

  function addItem(item) {
    items.push(item);
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach(function (listener) {
      listener(items);
    })
  }

  dispatcher.register(function (payload) {
    var split = payload.type.split(":");
    if (split[0] === "item") {
      switch (split[1]) {
        case 'getItems':
          getItems();
          break;
        default:
          console.log('hey');
      }
    }
  });

  return {
    getItems: getItems,
    onChange: onChange
  }
}

module.exports = ListStore();
