'use strict';

var routes = module.exports = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new');
routes.add('/campaigns/:address/requests', 'campaigns/request/index');
routes.add('/campaigns/:address/requests/new', 'campaigns/request/newRequest');
routes.add('/campaigns/:address', 'campaigns/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsT0FBTyxBQUFQLFVBQWlCLEFBQWhDOztBQUVBLE9BQU8sQUFBUCxJQUFXLEFBQVgsa0JBQTRCLEFBQTVCO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxnQ0FBMEMsQUFBMUM7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG9DQUE4QyxBQUE5QztBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsdUJBQWlDLEFBQWpDOztBQUVBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRTovUmVhY3RKUy9raWNrc3RhcnQifQ==