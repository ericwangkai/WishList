
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.angular = function (req, res) {
  var route = req.params.route;
  var name = req.params.name;
  res.render('angular/' + route + "/" + name);
};
