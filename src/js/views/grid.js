define(['backbone.marionette', 'views/griditem'], function(Mn, GridItemView) {

  'use strict';

  return Mn.CollectionView.extend({

    collectionEvents: {
      'sync': 'render'
    },

    childView: GridItemView,

    el: '#grid'

  });

});
