/*jslint node: true, indent: 2, nomen:true, stupid:true */
'use strict';

module.exports = function (server) {
  /*jslint unparam:true*/
  server.get('/view1/api', function (req, res) {
    res.json({
      name: 'Bob'
    });
  });
  /*jslint unparam:false*/
};

