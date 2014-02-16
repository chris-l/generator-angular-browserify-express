/* jslint node: true */
'use strict';

module.exports = function (server) {
  server.get('/view1/api', function (req, res) {
    res.json({
      name: 'Bob'
    });
  });
};

