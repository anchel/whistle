var properties = require('../../../lib/rules/util').properties;

module.exports = function(req, res) {
  properties.set('interceptHttpsConnects', req.body.interceptHttpsConnects == 1);
  res.json({ec: 0, em: 'success'});
};

