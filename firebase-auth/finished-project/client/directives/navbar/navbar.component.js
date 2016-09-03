System.register(["@angular/core", "../../services/firebase/firebase.service", "@angular/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1, router_1;
    var NavbarComponents;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavbarComponents = (function () {
                function NavbarComponents(firebase, routes) {
                    this.firebase = firebase;
                    this.routes = routes;
                }
                NavbarComponents.prototype.signOut = function () {
                    var _this = this;
                    this.firebase.signOut()
                        .then(function (data) {
                        console.log("Signed out success!");
                        _this.routes.navigate(['/login']);
                        console.log(data);
                    }, function (err) {
                        console.log("failed to signout!");
                        console.log(err);
                    });
                };
                NavbarComponents = __decorate([
                    core_1.Component({
                        selector: "mr-navbar",
                        styleUrls: ['./client/directives/navbar/navbar.component.html'],
                        templateUrl: './client/directives/navbar/navbar.component.html'
                    }), 
                    __metadata('design:paramtypes', [firebase_service_1.FirebaseService, router_1.Router])
                ], NavbarComponents);
                return NavbarComponents;
            }());
            exports_1("NavbarComponents", NavbarComponents);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map