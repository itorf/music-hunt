var dispatcher = require('../dispatcher');

module.exports = {

  testAction: function() {
    dispatcher.dispatch({
      title: 'hey',
      type: 'testaction'
    })
  };
};
