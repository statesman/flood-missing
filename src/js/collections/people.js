define(['backbone.FT', 'FT', 'models/person'], function(Backbone, FT, Person) {

  'use strict';

  return Backbone.Collection.extend({
    model: Person,
    table: new FT({
      proxy: 'https://aas-ft-proxy.herokuapp.com/',
      cache: true,
      tableId: '1ARCnC8z42zAt4idLJf3LxHdslWkICb7W_0CZ5dQ8',
      columns: [
        'name',
        'age',
        'last_seen',
        'photo',
        'deceased',
        'found',
        'found_alive'
      ]
    }),
    sync: Backbone.FusionTables,
    // Sort by last seen address, to group families together
    comparator: 'last_seen'
  });

});
