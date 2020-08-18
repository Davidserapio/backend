/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 //SessionController
 'POST /v1/sessions/login': { action: 'session/login' },

 //PostController
 'POST /v1/posts': { action: 'post/create' },
 'GET /v1/posts': { action: 'post/find-all' },
 'GET /v1/posts/:id': { action: 'post/find' },
 'PUT /v1/posts/:id': { action: 'post/update' },
 'DELETE /v1/posts/:id': { action: 'post/delete' },

  //UserController
  'POST /v1/users': { action: 'user/create' },
  'GET /v1/users': { action: 'user/find-all' },
  'GET /v1/users/:id': { action: 'user/find' },
  'PUT /v1/users/:id': { action: 'user/update' },
  'DELETE /v1/users/:id': { action: 'user/delete' },

  //WarehouseController
  'POST /v1/warehouse': { action: 'warehouse/create' },
  'GET /v1/warehouse': { action: 'warehouse/find-all' },
  'GET /v1/warehouse/:id': { action: 'warehouse/find' },
  'PUT /v1/warehouse/:id': { action: 'warehouse/update' },
  'DELETE /v1/warehouse/:id': { action: 'warehouse/delete' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
