System.register(['@angular/router', "../../components/home/home.component", "../../components/login/login.component", "../../components/404/404.component", "../../components/register/register.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, login_component_1, _404_component_1, register_component_1;
    var routes, homeroutesproviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (_404_component_1_1) {
                _404_component_1 = _404_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: '**', component: _404_component_1.FourOFourComponent }
            ]);
            exports_1("homeroutesproviders", homeroutesproviders = []);
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    }
});
//# sourceMappingURL=home.routing.js.map