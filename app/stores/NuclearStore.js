var nuclear = require('nuclear-js');
var Reactor = nuclear.Reactor;
var Store = nuclear.Store;
var to Immutable = nuclear.toImmutable;

var reactor = new Reactor({ debug: true });

reactor.registerStores({
  typeFilter: Store({
    getInitialState() {
      return null;
    },

    initialize() {
      this.on('FILTER_TYPE', (state, type) => type)
    }
  }),

  items: Store({
    getInitialState() {
      return toImmutable([
        { name: 'blah blah blah' },
        { name: 'hahaha' }
      ])
    },

    initialize() {
      this.on('ADD_ITEM', state, item) => state.push(item))
    }
  })
})

// https://optimizely.github.io/nuclear-js/
