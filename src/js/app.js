require(['jquery', 'lib/spin', 'collections/people', 'views/grid'], function($, spin, People, Grid) {

  'use strict';

  $(function() {
    spin.spin();

    // Load the data
    var people = new People();

    people.fetch({
      success: function(data) {
        spin.stop();
      }
    });

    new Grid({collection: people});

  });

});
