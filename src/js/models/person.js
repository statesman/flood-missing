define(['backbone', 'underscore'], function(Backbone, _) {

  'use strict';

  return Backbone.Model.extend({

    parse: function(response, options) {
      response.deceased = (response.deceased === 'yes');
      response.found_alive = (response.found_alive === 'yes');
      return response;
    }

  });

});
