webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_list_room_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_room_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_score_add_score_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'room/:id/add', component: __WEBPACK_IMPORTED_MODULE_4__add_score_add_score_component__["a" /* AddScoreComponent */] },
    { path: 'room/:id', component: __WEBPACK_IMPORTED_MODULE_3__room_room_component__["a" /* RoomComponent */] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_2__room_list_room_list_component__["a" /* RoomListComponent */] },
    { path: '', redirectTo: 'rooms', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAt5wL7EVYLFXTWjpEqf6tQLvni5pfFTKs",
            authDomain: "unos-239c4.firebaseapp.com",
            databaseURL: "https://unos-239c4.firebaseio.com",
            projectId: "unos-239c4",
            storageBucket: "unos-239c4.appspot.com",
            messagingSenderId: "806702241348"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
        this.authService.init();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(181),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_game_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_list_game_list_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__room_room_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__room_list_room_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__room_rooms_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_score_add_score_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_6__game_list_game_list_component__["a" /* GameListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_8__room_list_room_list_component__["a" /* RoomListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__add_score_add_score_component__["a" /* AddScoreComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__["a" /* AuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__room_rooms_service__["a" /* RoomsService */], __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signout', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AuthRoutingModule);

//# sourceMappingURL=auth-routing.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameListComponent = (function () {
    function GameListComponent() {
    }
    GameListComponent.prototype.ngOnInit = function () {
    };
    return GameListComponent;
}());
GameListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-game-list',
        template: __webpack_require__(183),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], GameListComponent);

//# sourceMappingURL=game-list.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameComponent = (function () {
    function GameComponent() {
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__(184),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], GameComponent);

//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.isAuth = false;
        this.username = 'micky';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.onAuthStateChange.subscribe(function (isAuth) {
            _this.username = _this.authService.getUsername();
            _this.isAuth = isAuth;
            console.log('fires subject', isAuth);
            console.log(_this);
        });
        this.authService.emitter.subscribe(function (isAuth) {
            _this.username = _this.authService.getUsername();
            _this.isAuth = isAuth;
            console.log('fires emit', isAuth);
            console.log(_this);
        });
        // setInterval(()=>{
        // 	console.log(this.isAuth);
        // }, 1000);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(185),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_game_model__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });

var Room = (function () {
    function Room(id, name, players, games) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = 'unnamed'; }
        if (players === void 0) { players = []; }
        if (games === void 0) { games = []; }
        this.id = id;
        this.name = name;
        this.players = players;
        this.games = games;
    }
    Room.prototype.getPlayerScore = function (name) {
        return this.games.reduce(function (acc, x) { return acc + x.scores[name]; }, 0);
    };
    Room.prototype.getPlayers = function () {
        return this.players;
    };
    Room.prototype.addGame = function (scores) {
        this.games.push(new __WEBPACK_IMPORTED_MODULE_0__game_game_model__["a" /* Game */](~~(Math.random() * 1e6), scores));
        this.rearrange();
    };
    Room.prototype.rearrange = function () {
        var shortList = [];
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            var score = this.getPlayerScore(player);
            shortList.push({ score: score, name: player });
        }
        shortList.sort(function (a, b) {
            return a.score - b.score;
        });
        this.players = shortList.map(function (x) { return x.name; });
    };
    return Room;
}());

//# sourceMappingURL=room.model.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".headWrap {\r\n    padding: 0;\r\n}\r\n\r\n.navbar {\r\n    border-radius: 0;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    border-radius: 0;\r\n}\r\n\r\na:active {\r\n    box-shadow: none;\r\n}\r\n\r\n.user {\r\n    height: 52px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 15px;\r\n}\r\n\r\n.userpic {\r\n    width: 32px;\r\n    height: 32px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".header {\r\n    height: 60px;\r\n    padding: 10px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\nh1  {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nth {\r\n    font-weight: 600;\r\n}\r\n.score, .player {\r\n    text-align: center;\r\n}\r\n\r\n.total {\r\n    opacity: 0.5;\r\n    font-size: 0.8em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" [formGroup]=\"form\" #f=\"ngForm\">\n    <div *ngIf=\"players && players.length > 0\" formArrayName=\"playersFA\">\n        <div\n            *ngFor=\"let player of playersFA.controls; let i = index;\"\n        >\n            <h2>{{player.value.name}}</h2>\n            <div class=\"form-group\" [formGroupName]=\"i\">\n                <input type=\"text\" required class=\"form-control hidden\" formControlName=\"name\">\n                <input type=\"number\" required class=\"form-control\" formControlName=\"score\">\n            </div>\n        </div>\n\n    </div>\n    <hr>\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Next</button>\n</form>\n\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-10 col-md-8 col-lg-6 col-xs-offset-1 col-md-offset-2 col-lg-offset-3\" >\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<h2>Sign in</h2>\n\n<button class=\"btn btn-danger\" type=\"button\" (click)=\"googleClick()\">With Google</button>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<p>\n  game-list works!\n</p>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<p>\n  game works!\n</p>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"col-xs-10 col-md-8 col-lg-6 col-xs-offset-1 col-md-offset-2 col-lg-offset-3 headWrap\">\n        <ul class=\"nav navbar-nav\">\n            <li><a class=\"navbar-brand\" routerLink=\"/\">UNO!</a></li>\n            <li routerLinkActive=\"active\"><a class=\"btn\" routerLink=\"/rooms\">Rooms</a></li>\n            <li routerLinkActive=\"active\"><a class=\"btn\" routerLink=\"/settings\">Settings</a></li>\n            <li routerLinkActive=\"active\"><a class=\"btn\" routerLink=\"/signin\">Sign in</a></li>\n            <li *ngIf=\"isAuth\" class=\"user\">\n                    {{username}}\n                    <img [src]=\"authService.getUserPhotoUrl()\" class=\"userpic\" alt=\"user photo\">\n            </li>\n            <!--{{username}}-->\n            <!--{{authService.getUserPhotoUrl()}}-->\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sx-12\">\n        <div class=\"list-group\">\n            <a\n                    routerLink=\"/room/{{room.id}}\"\n                    class=\"list-group-item\"\n                    *ngFor=\"let room of rooms\">\n\n                <h2>Room: {{room.name}}</h2>\n\n                <h3>Players:</h3>\n\n                <ul>\n                    <li *ngFor=\"let player of room.players; let i = index\">\n\n                        {{i}}: {{player}}\n                    </li>\n                </ul>\n            </a>\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-xs-8\">\n        <h1>Room: {{ room.name }}</h1>\n    </div>\n    <div class=\"col-xs-4 text-right\">\n        <a class=\"btn btn-success\" routerLink=\"add\">Add round</a>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-sx-12\">\n        <h2>Games:</h2>\n        <table class=\"table table-condensed\">\n            <tr>\n                <th>#</th>\n                <th\n                    class=\"player\"\n                    *ngFor=\"let player of room.players\">\n                    {{ player }}\n                    <span class=\"total\">\n                        {{ room.getPlayerScore(player) }}\n                    </span>\n                </th>\n            </tr>\n            <tr *ngFor=\"let game of room.games\">\n                <td>{{game.id}}</td>\n                <td\n                    class=\"score\"\n                    *ngFor=\"let player of room.players\">\n                    {{ game.scores[player] }}\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService() {
        this.authentificated = false;
        this.onAuthStateChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    AuthService.prototype.init = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.signedIn(user);
            }
            else {
                console.log('not signed in');
            }
        });
    };
    AuthService.prototype.singInGoogle = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        // provider.setCustomParameters({
        // 	'login_hint': 'user@example.com'
        // });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            _this.tokenGoogle = result.credential.accessToken;
            // The signed-in user info.
            _this.signedIn(result.user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.error(errorCode, errorMessage, email, credential);
        });
    };
    AuthService.prototype.signedIn = function (user) {
        this.user = user;
        this.authentificated = !!user;
        this.onAuthStateChange.next(this.authentificated);
        this.emitter.emit(this.authentificated);
    };
    AuthService.prototype.isAuthentificated = function () {
        return !!this.user;
    };
    AuthService.prototype.getUserPhotoUrl = function () {
        return this.user && this.user.photoURL;
    };
    AuthService.prototype.getUsername = function () {
        return this.user && this.user.displayName;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_model__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game_model__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomsService = (function () {
    function RoomsService() {
        this.rooms = [
            new __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */](0, 'gambling', ['me', 'you', 'she'], [
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](1, { me: 10, you: 0, she: 99 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](2, { me: 78, you: 0, she: 18 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](3, { me: 0, you: 1, she: 8 }),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */](1, 'All stars', ['Lennon', 'Jackson', 'Stylsky'], [
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](4, { Lennon: 110, Jackson: 53, Stylsky: 0 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](5, { Lennon: 12, Jackson: 0, Stylsky: 19 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](6, { Lennon: 0, Jackson: 11, Stylsky: 37 }),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */](2, 'The Best Is Yet To Come', ['Jerry', 'Micky', 'Tom', 'Bender', 'Kitty'], [
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](7, { Jerry: 110, Micky: 53, Tom: 0, Bender: 0, Kitty: 99 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](8, { Jerry: 12, Micky: 0, Tom: 19, Bender: 0, Kitty: 18 }),
                new __WEBPACK_IMPORTED_MODULE_2__game_game_model__["a" /* Game */](9, { Jerry: 0, Micky: 11, Tom: 37, Bender: 1, Kitty: 8 }),
            ])
        ];
    }
    RoomsService.prototype.getRooms = function () {
        return this.rooms;
    };
    RoomsService.prototype.getRoom = function (id) {
        return this.rooms.find(function (x) { return x.id == id; });
    };
    return RoomsService;
}());
RoomsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RoomsService);

//# sourceMappingURL=rooms.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_rooms_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddScoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddScoreComponent = (function () {
    function AddScoreComponent(route, router, roomsService) {
        this.route = route;
        this.router = router;
        this.roomsService = roomsService;
    }
    AddScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.gameId = params.id;
            var room = _this.roomsService.getRoom(_this.gameId);
            _this.players = room.getPlayers();
            _this.createForm();
        });
    };
    AddScoreComponent.prototype.createForm = function () {
        this.playersFA = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormArray */]([]);
        for (var i = 0; i < this.players.length; i++) {
            this.playersFA.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
                'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](this.players[i], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required),
                'score': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required)
            }));
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            'playersFA': this.playersFA
        });
    };
    AddScoreComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        var room = this.roomsService.getRoom(this.gameId);
        var score = {};
        var v = this.form.value['playersFA'];
        for (var i = 0; i < v.length; i++) {
            score[v[i].name] = +v[i].score;
        }
        room.addGame(score);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    return AddScoreComponent;
}());
AddScoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-add-score',
        template: __webpack_require__(180),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__room_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__room_rooms_service__["a" /* RoomsService */]) === "function" && _c || Object])
], AddScoreComponent);

var _a, _b, _c;
//# sourceMappingURL=add-score.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.googleClick = function () {
        this.authService.singInGoogle();
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__(182),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = (function () {
    function Game(id, scores) {
        this.id = id;
        this.scores = scores;
    }
    return Game;
}());

//# sourceMappingURL=game.model.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_rooms_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomListComponent = (function () {
    function RoomListComponent(roomsService) {
        this.roomsService = roomsService;
    }
    RoomListComponent.prototype.ngOnInit = function () {
        this.rooms = this.roomsService.getRooms();
    };
    return RoomListComponent;
}());
RoomListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-room-list',
        template: __webpack_require__(186),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_rooms_service__["a" /* RoomsService */]) === "function" && _a || Object])
], RoomListComponent);

var _a;
//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomComponent = (function () {
    function RoomComponent(route, roomsService) {
        this.route = route;
        this.roomsService = roomsService;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params.id;
            _this.room = _this.roomsService.getRoom(_this.id);
        });
    };
    return RoomComponent;
}());
RoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-room',
        template: __webpack_require__(187),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */]) === "function" && _b || Object])
], RoomComponent);

var _a, _b;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map