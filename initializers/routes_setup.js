module.exports = function(app) {
  // Route Objects
  home = getRoute("home");
  api = getRoute("api");

  // Main Routes
  app.get('/', home.index);
  app.get('/angular/:route/:name', home.angular);

  // JSON API
  app.get('/api/name', api.name);

  // redirect all others to the index (HTML5 history)
  app.get('*', home.index);
}

function mapRoutes(app, route_name) {
  var route = getRoute(route_name);

  route_name = '/' + route_name;
  // index
  app.get(route_name, route.index);
  // add
  app.get(route_name + '/new', route.new);
  // create
  app.post(route_name + '/new', route.create);
  // edit
  app.get(route_name + '/:id/edit', route.edit);
  // update
  app.put(route_name + '/:id/edit', route.update);
  // destroy
  app.del(route_name + '/:id', route.destroy);
  // show
  app.get(route_name + '/:id', route.show);
};

function getRoute(route_name) {
  return require('../routes/' + route_name);
}