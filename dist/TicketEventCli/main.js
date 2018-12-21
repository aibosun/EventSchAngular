(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slidelr, sliderl, hiddenShow, ecAni */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slidelr", function() { return slidelr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderl", function() { return sliderl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenShow", function() { return hiddenShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecAni", function() { return ecAni; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slidelr = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slidelr', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-175px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(700)
    ])
]);
var sliderl = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('sliderl', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(150px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400)
    ])
]);
var hiddenShow = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('hiddenShow', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden=>show', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400)
    ])
    // transition(':enter',[
    //   style({
    //     opacity: 0,
    //     transform:'translateX(150px)'}),
    //   animate(400)
    // ])
]);
var ecAni = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('ecAni', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        opacity: 1,
        display: 'block'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed => expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded => collapsed', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in')
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ticket-event></ticket-event>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TicketEventCli';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ticket_event_ticket_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-event/ticket-event.component */ "./src/app/ticket-event/ticket-event.component.ts");
/* harmony import */ var _te_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./te-api.service */ "./src/app/te-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _namecut_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./namecut.pipe */ "./src/app/namecut.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular5_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular5-svg-round-progressbar */ "./node_modules/angular5-svg-round-progressbar/angular5-svg-round-progressbar.umd.js");
/* harmony import */ var angular5_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular5_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ticket_event_ticket_event_component__WEBPACK_IMPORTED_MODULE_4__["TicketEventComponent"],
                _namecut_pipe__WEBPACK_IMPORTED_MODULE_7__["NamecutPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A'
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                angular5_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_12__["RoundProgressModule"]
            ],
            providers: [_te_api_service__WEBPACK_IMPORTED_MODULE_5__["TeApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbActiveModal"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/namecut.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/namecut.pipe.ts ***!
  \*********************************/
/*! exports provided: NamecutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamecutPipe", function() { return NamecutPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NamecutPipe = /** @class */ (function () {
    function NamecutPipe() {
    }
    NamecutPipe.prototype.transform = function (value) {
        if (!value)
            return null;
        var words = value.split(' ');
        if (value.length <= 35) {
            return words;
        }
        else {
            return value.substr(0, 35) + "...";
        }
    };
    NamecutPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'namecut'
        })
    ], NamecutPipe);
    return NamecutPipe;
}());



/***/ }),

/***/ "./src/app/te-api.service.ts":
/*!***********************************!*\
  !*** ./src/app/te-api.service.ts ***!
  \***********************************/
/*! exports provided: TeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeApiService", function() { return TeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeApiService = /** @class */ (function () {
    function TeApiService(http) {
        this.http = http;
        this.evnUrl=string="http://localhost:3000";
        //this.evnUrl = "http://tecketapi-env.yy2xtzbncj.us-east-2.elasticbeanstalk.com";
        this.ticketApiKey = "xF34U9ON4RI6uaaIMUirrSbb8hOGKVhb";
        this.geocodingApiKey = "AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A";
        this.songkickApiKey = "dsajcjHofU4jTKj0";
    }
    Object.defineProperty(TeApiService.prototype, "jsonOption", {
        get: function () {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    TeApiService.prototype.goCallIpApi = function () {
        var url = "http://ip-api.com/json";
        return this.http.get(url);
    };
    TeApiService.prototype.goGoogleMap = function () {
        var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A";
        return this.http.get(url);
    };
    TeApiService.prototype.goCallAutoCpl = function (keyword) {
        var url = this.evnUrl + "/autocomplete";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.ticketApiKey).set('keyword', keyword);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.goCallGeoCoding = function (address) {
        var url = this.evnUrl + "/geocoding";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('address', address).set('key', this.geocodingApiKey);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.goCallGeoHash = function (lat, lon) {
        var url = this.evnUrl + "/geohash";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('lat', lat).set('lon', lon);
        return this.http.get(url, { responseType: 'text', params: params });
    };
    TeApiService.prototype.getEventsList = function (keyword, segmentId, radius, unit, geoPoint) {
        var url = this.evnUrl + "/events";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.ticketApiKey).set('keyword', keyword).set('segmentId', segmentId).set('radius', radius).set('unit', unit).set('geoPoint', geoPoint).set('sort', "date,asc");
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getDetialInfo = function (eventid) {
        var url = this.evnUrl + "/detialinfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.ticketApiKey).set('eventid', eventid);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getVenueInfo = function (eventname) {
        var url = this.evnUrl + "/venueinfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.ticketApiKey).set('eventname', eventname);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getUpcomingInfo = function (venuename) {
        var url = this.evnUrl + "/upcominginfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.songkickApiKey).set('venuename', venuename);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getUpcomingInfoCtn = function (venueid) {
        var url = this.evnUrl + "/upcominginfoctn";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apikey', this.songkickApiKey).set('venueid', venueid);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getArtistInfo = function (artistname) {
        var url = this.evnUrl + "/artistinfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('artistname', artistname);
        return this.http.get(url, { params: params });
    };
    TeApiService.prototype.getArtistTokenInfo = function () {
        var url = this.evnUrl + "/artisttokeninfo";
        return this.http.get(url);
    };
    TeApiService.prototype.getImages = function (artistname) {
        var url = this.evnUrl + "/imageinfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', artistname).set('cx', '001833434290300447219:3ufbaufswls').set('imgSize', 'huge').set('num', '8').set('searchType', 'image').set('key', 'AIzaSyDmqxBsVHfo9d9qNEl30SipPI2y1EmXxGk');
        return this.http.get(url, { params: params });
    };
    TeApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeApiService);
    return TeApiService;
}());



/***/ }),

/***/ "./src/app/ticket-event/ticket-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ticket-event/ticket-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    font-weight: bold;\n}\n\n.formControl{\n    background-color: #ccc;\n    width: 55%;\n    height:auto;\n    margin-top:3%; \n    padding: 10px;\n    text-align: center;\n}\n\n.rowctl{\n    text-align: center;\n}\n\n/* fix icon and font in the same line */\n\nbutton{\n    display: inline-flex;\n    vertical-align: middle;\n    outline: 0;\n}\n\n.table{\n    margin-top: 5%;\n}\n\n.table tr.active td {\n    background-color:#f3e7a6 !important;\n}\n\n.collapsed{\n    height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    opacity: 1\n  }\n\nagm-map {\n    height: 400px;\n}\n\n.progress-wrapper{\n    position: relative;\n    margin: 0;\n}\n\n.circle{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width:100%;\n    height: 100%;\n}\n\nround-progress{\n    width:10px;\n    height: 10px    ;\n}\n\n.progress-wrapper .text{\n    font-weight: bold;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    text-align: left;\n    margin-left:15px;\n    z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0LWV2ZW50L3RpY2tldC1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBQ0Qsd0NBQXdDOztBQUN4QztJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsV0FBVztDQUNkOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFDRDtJQUNJLG9DQUFvQztDQUN2Qzs7QUFFRDtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7R0FDWDs7QUFFSDtJQUNJLGNBQWM7Q0FDakI7O0FBR0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtDQUNiOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90aWNrZXQtZXZlbnQvdGlja2V0LWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm1Db250cm9se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBtYXJnaW4tdG9wOjMlOyBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd2N0bHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiBmaXggaWNvbiBhbmQgZm9udCBpbiB0aGUgc2FtZSBsaW5lICovXG5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4udGFibGV7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4udGFibGUgdHIuYWN0aXZlIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmM2U3YTYgIWltcG9ydGFudDtcbn1cblxuLmNvbGxhcHNlZHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgb3BhY2l0eTogMVxuICB9XG5cbmFnbS1tYXAge1xuICAgIGhlaWdodDogNDAwcHg7XG59XG5cblxuLnByb2dyZXNzLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbn1cbi5jaXJjbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxucm91bmQtcHJvZ3Jlc3N7XG4gICAgd2lkdGg6MTBweDtcbiAgICBoZWlnaHQ6IDEwcHggICAgO1xufVxuLnByb2dyZXNzLXdyYXBwZXIgLnRleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcbiAgICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ticket-event/ticket-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ticket-event/ticket-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<form class=\" form-horizontal formControl container\" (ngSubmit)=\"f.form.valid &&submitForm()\" #f=\"ngForm\" novalidate>\n  <div class=\"form-row\">\n    <label class=\"col-sm-offset-2 col-sm-10\">Entertainment Event Ticket Search</label><br />\n  </div>\n  <div class=\"form-row rowctl\">\n    <label class=\"control-label col-sm-3\">Keyword<span style=\"color:red; font-size:1.2rem; margin-left:2px;\">*</span></label>\n    <div class=\"col-sm-7\">\n      <input autocomplete=\"off\" type=\"text\" class=\"form-control\" name=\"keyword\" [(ngModel)]=\"keyword\" (click)=\"isnotclear=true\"\n        (keyup)=\"onKeyUp($event.target.value)\" matInput [matAutocomplete]=\"tdAuto\" placeholder=\"Enter Artist,Team or Event Name(eg. Lakers)\"\n        #keywordcontent=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && keywordcontent.invalid&&isnotclear}\" required>\n      <mat-autocomplete #tdAuto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let en of autoList\" [value]=\"en.name\">{{en.name}}</mat-option>\n      </mat-autocomplete>\n\n      <div style=\"text-align: left;\" *ngIf=\"keywordcontent.invalid && (keywordcontent.touched||f.submitted)&&isnotclear\">\n        <div *ngIf=\"keywordcontent.errors.required\" style=\"color:red\">\n          Please enter a keyword.\n        </div>\n      </div>\n    </div>\n  </div><br />\n  <div class=\"form-row\">\n    <label class=\"control-label col-sm-3 \">Category</label>\n    <div class=\"col-sm-3\">\n      <select class=\"custom-select\" name=\"category\" [(ngModel)]=\"category\">\n        <option value=\"\" selected>All</option>\n        <option value=\"KZFzniwnSyZfZ7v7nJ\">Music</option>\n        <option value=\"KZFzniwnSyZfZ7v7nE\">Sports</option>\n        <option value=\"KZFzniwnSyZfZ7v7na\">Arts&amp;Theatre</option>\n        <option value=\"KZFzniwnSyZfZ7v7nn\">Film</option>\n        <option value=\"KZFzniwnSyZfZ7v7n1\">Miscellaneous</option>\n      </select>\n    </div>\n  </div>\n  <br />\n  <div class=\"form-row\">\n    <label class=\"control-label col-sm-3 \">Distance</label>\n    <div class=\"col-sm-3\">\n      <input type=\"text\" class=\"form-control\" name=\"distance\" [(ngModel)]=\"distance\" placeholder=\"10\"><br />\n    </div>\n    <div class=\"col-sm-3\">\n      <select class=\"custom-select\" name=\"unit\" [(ngModel)]=\"unit\">\n        <option value=\"miles\">Miles</option>\n        <option value=\"km\">Kilometers</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <label class=\"control-label col-sm-3 \">From<span style=\"color:red; font-size:1.2rem; margin-left:2px;\">*</span></label>\n    <div class=\"col-sm-7\" style=\"text-align: left;\">\n      <input type=\"radio\" name=\"locationR\" [(ngModel)]=\"locationR\" value=\"0\" (click)=\"radioCtl()\"> Current location<br />\n      <input type=\"radio\" name=\"locationR\" [(ngModel)]=\"locationR\" value=\"1\" (click)=\"radioCtl()\"> Other,Please\n      specifiy:<br />\n      <input *ngIf=\"!islocalInput\" type=\"text\" style=\"margin-left: 15px;width:96%\" class=\"form-control\" disabled>\n      <div *ngIf=\"islocalInput\">\n        <input type=\"text\" name=\"location1\" [(ngModel)]=\"location1\" style=\"margin-left: 15px;width:96%\" class=\"form-control\"\n          #locationcontent=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && locationcontent.invalid }\" required>\n        <div style=\"margin-left: 15px;width:96%\" *ngIf=\"locationcontent.invalid && (locationcontent.touched||f.submitted) && islocalInput\">\n          <div *ngIf=\"locationcontent.errors.required\" style=\"color:red\">\n            Please enter Location!\n          </div>\n        </div>\n      </div>\n    </div>\n  </div><br />\n\n  <div class=\"form-row\">\n    <div class=\"col-sm-6\">\n      <button aria-label=\"search\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!isDisaSearch || !f.form.valid\">\n        <mat-icon>search</mat-icon>Search\n      </button>&nbsp;&nbsp;\n      <button type=\"button\" class=\"btn\" (click)=\"doClear()\">\n        <mat-icon>clear_all</mat-icon>Clear\n      </button>\n    </div>\n  </div>\n</form>\n<!-- ------------------------------Events List starts ------------------------------>\n<div class=\"container\" style=\"margin-top:10px;\">\n  <ul class=\"nav nav-pills justify-content-center\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"reslistctl==true\" href=\"#\" (click)=\"showResult($event)\">Results</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [class.active]=\"reslistctl==false\" href=\"#\" (click)=\"showFavorite($event)\">Favorites</a>\n    </li>\n  </ul>\n</div>\n\n\n\n<div *ngIf=\"isShowEvent==true && reslistctl==true\" [@.disabled]=\"isDisSlide\" class=\"table-responsive container\">\n  <div  class=\"container\" *ngIf=\"isShowEtBar==false&&eventsList==null\" style=\"font-size:20px;background-color:navajowhite;text-align: left;margin-top:10%;font-size:20px\">No records.</div>\n\n  <div *ngIf=\"isShowEtBar==true\" class=\"progress container\" style=\"margin-top:10%;\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n      aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n  </div>\n\n  <div class=\"container\">\n    <button *ngIf=\"isShowEtBar==false&&eventsList!=null\" [@sliderl] type=\"clear\" class=\"btn btn-light float-right\" style=\"border:2px solid #ccc;\"\n      [disabled]=\"isDisaDetail\" (click)=\"gobackDetail()\">Detail<mat-icon class=\"iconctl\">chevron_right</mat-icon>\n    </button>\n  </div>\n  <table *ngIf=\"isShowEtBar==false&&eventsList!=null\" class=\"table\" [@sliderl]>\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Event</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Venue&nbsp;Info</th>\n        <th scope=\"col\">Favorite</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let event of eventsList; index as i\" [class.active]=\"i == hightlightRow\">\n        <td>{{i+1}}</td>\n        <td>{{event.dates?.start?.localDate}}</td>\n        <td><a href=\"#\" matTooltip=\"{{event.name}}\" [matTooltipPosition]=\"'below'\" (click)=\"getDetailInfo('res',$event,i,event.id,event)\">{{event.name|namecut}}</a></td>\n        <td>{{event.classifications[0]?.genre?.name}}-{{event.classifications[0]?.segment?.name}}</td>\n        <td>{{event._embedded?.venues[0]?.name}}</td>\n        <td>\n          <button class=\"btn\" class=\"btn btn-light\" style=\"border:2px solid #ccc;\" *ngIf=\"favoriteCmp(event.id)==true\"\n            (click)=\"addFvrt(event.id,event)\">\n            <mat-icon>star_border</mat-icon>\n          </button>\n          <button class=\"btn\" class=\"btn btn-light\" style=\"border:2px solid #ccc;color:goldenrod;\" *ngIf=\"favoriteCmp(event.id)==false\"\n            (click)=\"removeFvrt(event.id)\">\n            <mat-icon>star</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!--    ~~~~~~~~~~~~~~~~~~~~~~~~~~Favorites List start ~~~~~~~~~~~~~~~~~~~~~~~~-->\n<div *ngIf=\"isShowEvent && reslistctl==false\" class=\"table-responsive container\" [@.disabled]=\"isDisSlide\">\n\n  <div  class=\"container\" *ngIf=\"favoList==null\" style=\"background-color:navajowhite;text-align: left;margin-top:10%;font-size:20px\">No records.</div>\n\n  <button type=\"clear\" class=\"btn btn-light float-right\" *ngIf=\"favoList!=null\" style=\"border:2px solid #ccc;\" [disabled]=\"isDisaDetail\"\n    (click)=\"gobackDetail()\">Detail<mat-icon class=\"iconctl\">chevron_right</mat-icon></button>\n\n  <table class=\"table\" *ngIf=\"favoList!=null\" [@sliderl]>\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Event</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Venue&nbsp;Info</th>\n        <th scope=\"col\">Favorite</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let event of favoList; index as ifvrt\" [class.active]=\"ifvrt == hightlightFvrtRow\">\n        <td>{{ifvrt+1}}</td>\n        <td>{{event.dates?.start?.localDate}}</td>\n        <td><a href=\"#\" matTooltip=\"{{event.name}}\" [matTooltipPosition]=\"'below'\" (click)=\"getDetailInfo('fvrt',$event,ifvrt,event.id,event)\">{{event.name|namecut}}</a></td>\n        <td>{{event.classifications[0]?.genre?.name}}-{{event.classifications[0]?.segment?.name}}</td>\n        <td>{{event._embedded?.venues[0]?.name}}</td>\n        <td>\n          <button class=\"btn\" class=\"btn btn-light\" style=\"border:2px solid #ccc;\" (click)=\"deleteFvrt(event.id,event)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- ------------------------------Detail table  starts ------------------------------>\n<div *ngIf=\"isShowDetail==true\" @slidelr class=\"table-responsive container\" style=\"margin-top:30px;\">\n  <div class=\"table-responsive container\" style=\"width:100%;text-align:center\">\n    <h3>{{eventnameD}}</h3>\n  </div>\n  <div>\n    <button class=\"btn btn-light float-left\" style=\"border:2px solid #ccc;\" (click)=\"gobackEventListCtl()\">\n      <mat-icon>chevron_left</mat-icon>List\n    </button>\n    <button class=\"btn\" class=\"btn btn-light float-right\" style=\"border:2px solid #ccc;\" *ngIf=\"favoriteCmp(dtIdStar)==true\"\n      (click)=\"addFvrt(dtIdStar,dtInfoStar)\">\n      <mat-icon>star_border</mat-icon>\n    </button>\n    <button class=\"btn\" class=\"btn btn-light float-right\" style=\"border:2px solid #ccc;color:goldenrod;\" *ngIf=\"favoriteCmp(dtIdStar)==false\"\n      (click)=\"removeFvrt(dtIdStar)\">\n      <mat-icon>star</mat-icon>\n    </button>&nbsp; &nbsp;\n    <button class=\"btn float-right\" style=\"padding: 0px;\" [disabled]=\"isDisaDetail\">\n      <a class=\"twitter-share-button\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?text={{tweettext}}&hashtags={{hash}}\">\n        <img src=\"http://csci571.com/hw/hw8/Images/Twitter.png\" width=\"45px;\" height=\"40px;\">\n      </a>\n    </button>&nbsp;\n  </div>\n</div>\n<div *ngIf=\"isShowDetail\" @slidelr class=\"table-responsive container\" style=\"margin-top:20px;\">\n    <ul class=\"nav nav-tabs justify-content-end container\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" [class.active]=\"tabCtl=='a'\" id=\"event-tab\" data-toggle=\"tab\" href=\"#event\"  (click)=\"tabCtl='a'\" role=\"tab\" aria-controls=\"event\"\n          aria-selected=\"true\">Event</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" [class.active]=\"tabCtl=='b'\" id=\"artist-tab\" data-toggle=\"tab\" href=\"#artist\" (click)=\"getArtAndImg()\" role=\"tab\"\n          aria-controls=\"artist\" aria-selected=\"false\">Artist/Teams</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" [class.active]=\"tabCtl=='c'\" id=\"venue-tab\" data-toggle=\"tab\" href=\"#venue\" (click)=\"getVenueInfo()\" role=\"tab\"\n          aria-controls=\"venue\" aria-selected=\"false\">Venue</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" [class.active]=\"tabCtl=='d'\" id=\"upcome-tab\" data-toggle=\"tab\" href=\"#upcome\" (click)=\"getUpcomingInfo()\" role=\"tab\"\n          aria-controls=\"upcome\" aria-selected=\"false\">UpcomingEvents</a>\n      </li>\n    </ul>\n\n  <!-- ~~~~~~~~~~~~~~~~~~~~~~~ Detail~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade \" id=\"event\" [class.show]=\"tabCtl=='a'\" [class.active]=\"tabCtl=='a'\" role=\"tabpanel\" aria-labelledby=\"event-tab\">\n\n      <div *ngIf=\"isShowDtpBar==true\" class=\"progress\" style=\"margin-top:5%;width:100%\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n      </div>\n\n      <table *ngIf=\"isShowDtpBar==false\" class=\"table table-striped\">\n        <tbody>\n          <tr *ngIf=\"attractionnames!=''\">\n            <td><b>Artist/Team(s)</b></td>\n            <td>{{attractionnames}}</td>\n          </tr>\n          <tr>\n            <td><b>Venue</b></td>\n            <td>{{venueD}}</td>\n          </tr>\n          <tr>\n            <td><b>Time</b></td>\n            <td>{{dateD|date}}&nbsp;{{timeD}}</td>\n          </tr>\n          <tr>\n            <td><b>Category</b></td>\n            <td>{{generD}}|{{segmentD}}</td>\n          </tr>\n          <tr *ngIf=\"minD!=''&&curD!=''\">\n            <td><b>Price Range</b></td>\n            <td>{{minD|currency:curD:'symbol':'2.2-2'}}~{{maxD|currency:curD:'symbol':'3.2-2'}}</td>\n          </tr>\n          <tr>\n            <td><b>Ticket Status</b></td>\n            <td>{{tsD}}</td>\n          </tr>\n          <tr>\n            <td><b>Buy Ticket At</b></td>\n            <td><a href=\"{{btaD}}\" target=\"_blank\">TicketMaster</a></td>\n          </tr>\n          <tr>\n            <td><b>Seat Map</b></td>\n            <td><a href=\"#\" (click)=\"seatInModal($event,content)\">View Seat Map Here</a></td>\n          </tr>\n        </tbody>\n      </table>\n      <ng-template #content let-modal>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">View Seat Map</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" style=\"width:100%;height:100%\"><a href=\"{{smD}}\" target=\"_blank\"><img src=\"{{smD}}\" width=\"100%\" height=\"100%\"></a></div>\n        <div class=\"modal-footer\">\n          <button (click)=\"closeModal()\">\n            Close\n          </button>\n        </div>\n      </ng-template>\n    </div>\n    <!-- ~~~~~~~~~~~~~~~~~~~~~~~Artist~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n    <div class=\"tab-pane fade\" [class.show]=\"tabCtl=='b'\" [class.active]=\"tabCtl=='b'\"  role=\"tabpanel\" aria-labelledby=\"artist-tab\">\n      <div *ngIf=\"isShowArtBar==true\" class=\"progress\" style=\"margin-top:3%;width:100%\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n      </div>\n\n      <div  class=\"container\" *ngIf=\"isShowArtBar==false&&imaFinalArr.length==0\" style=\"background-color:navajowhite;text-align: left;margin-top:10%;font-size:20px\">No records.</div>\n\n      <div *ngIf=\"isShowArtBar==false&&imaFinalArr.length!=0\">\n        <div *ngFor=\"let img of imaFinalArr; index as ind;\">\n          <div class=\"container\" style=\"width:100%;text-align:center;margin-top:3%;\"><b>{{attractionsList[ind]?.name}}</b></div>\n          <table *ngIf=\"segmentD=='Music' && ArtFinalArr[ind]!=undefined\" class=\"table table-striped\" style=\"margin-top:0%;\">\n            <tbody>\n              <tr>\n                <td><b>Name</b></td>\n                <td>{{ArtFinalArr[ind]?.name}}</td>\n              </tr>\n              <tr>\n                <td><b>Followers</b></td>\n                <td>{{ArtFinalArr[ind]?.followers?.total| number}}</td>\n              </tr>\n              <tr *ngIf=\"ArtFinalArr[ind]!=undefined\">\n                <td><b>Popularity</b></td>\n                <td class=\"progress-wrapper\" >\n                    <round-progress class =\"circle\"[current]=\"ArtFinalArr[ind]?.popularity\"\n                      [max]=\"100\" [color]=\"'#21EC5E'\" [semicircle]=\"true\" [radius]=\"25\" [stroke]=\"5\">\n                    </round-progress>\n                    <div class=\"text\"> {{ArtFinalArr[ind]?.popularity}}\n                    </div>\n                </td>\n              </tr>\n              <tr>\n                <td><b>Check At</b></td>\n                <td><a href=\"{{ArtFinalArr[ind]?.external_urls?.spotify}}\" target=\"_blank\">Spotify</a></td>\n              </tr>\n            </tbody>\n          </table>\n          <mat-grid-list cols=\"3\" rowHeight=\"2:1\" style=\"width:100%;margin-top:5%;\">\n            <mat-grid-tile style=\"margin-top:2%\"*ngFor=\"let photo of img\"><a href=\"{{photo.link}}\" target=\"_blank\"><img src=\"{{photo.link}}\"\n                  width=\"250px\"></a></mat-grid-tile>\n          </mat-grid-list>\n        </div>\n      </div>\n    </div>\n    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Venue table ~~~~~~~~~~~~~~~~~~~~ -->\n    <div class=\"tab-pane fade\" [class.show]=\"tabCtl=='c'\" [class.active]=\"tabCtl=='c'\" id=\"venue\"  role=\"tabpanel\" aria-labelledby=\"venue-tab\">\n      <div *ngIf=\"isShowVenueBar==true\" class=\"progress\" style=\"margin-top:5%;width:100%\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n      </div>\n\n      <div  class=\"container\" *ngIf=\"isShowVenueBar==false&&venueInfo==null\" style=\"background-color:navajowhite;text-align: left;margin-top:10%;font-size:20px\">No records.</div>\n\n      <div *ngIf=\"isShowVenueBar==false&&venueInfo!=null\"  class=\"container\" style=\"width:100%;text-align:center;margin-top:10px;\"><b>{{venueInfo?.name}}</b></div>\n      <table *ngIf=\"isShowVenueBar==false&&venueInfo!=null\" class=\"table table-striped\">\n        <tbody>\n            <tr *ngIf=\"venueInfo.address!=undefined||venueInfo.address.line1!=''\">\n            <td><b>Address</b></td>\n            <td>{{venueInfo?.address?.line1}}</td>\n          </tr>\n          <tr *ngIf=\"venueInfo.city!=undefined||venueInfo.state!=undefined\">\n            <td><b>City</b></td>\n            <td>{{venueInfo?.city?.name}},{{venueInfo?.state?.name}}</td>\n          </tr>\n          <tr *ngIf=\"venueInfo.boxOfficeInfo!=undefined&&venueInfo.boxOfficeInfo.phoneNumberDetail!=''\">\n            <td><b>Phone Number</b></td>\n            <td>{{venueInfo?.boxOfficeInfo?.phoneNumberDetail}}</td>\n          </tr>\n          <tr *ngIf=\"venueInfo.boxOfficeInfo!=undefined&&venueInfo.boxOfficeInfo.openHoursDetail!=''\">\n              <td><b>Open Hours</b></td>\n            <td>{{venueInfo?.boxOfficeInfo?.openHoursDetail}}</td>\n          </tr>\n          <tr *ngIf=\"venueInfo.generalInfo!=undefined&&venueInfo.generalInfo.generalRule!=''\">\n              <td><b>General Rule</b></td>\n            <td>{{venueInfo?.generalInfo?.generalRule}}</td>\n          </tr>\n          <tr *ngIf=\"venueInfo.generalInfo!=undefined&&venueInfo.generalInfo.childRule!=''\">\n              <td><b>Child Rule</b></td>\n            <td>{{venueInfo?.generalInfo?.childRule}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div style=\"width:100%;height:400px\" *ngIf=\"isShowVenueBar==false&&venueInfo!=null\">\n        <agm-map [latitude]=\"mapLat\" [longitude]=\"mapLon\" [zoom]=\"14\">\n          <agm-marker [latitude]=\"mapLat\" [longitude]=\"mapLon\" [markerClickable]=\"true\"></agm-marker>\n        </agm-map>\n      </div>\n\n    </div>\n    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~upcoming card start ~~~~~~~~~~~~~~~~~~~-->\n    <div class=\"tab-pane fade\" [class.show]=\"tabCtl=='d'\" [class.active]=\"tabCtl=='d'\" id=\"upcome\"  role=\"tabpanel\" aria-labelledby=\"upcome-tab\">\n\n      <div *ngIf=\"isShowUpcomBar==true\" class=\"progress\" style=\"margin-top:5%;width:100%\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\"></div>\n      </div>\n\n      <div  class=\"container\" *ngIf=\"isShowUpcomBar==false&&upcomingList==null\" style=\"background-color:navajowhite;text-align: left;margin-top:10%;font-size:20px\">No records.</div>\n\n      <div *ngIf=\"isShowUpcomBar==false&&upcomingList!=null\">\n        <div style=\"margin-top:2%\">\n          <select class=\"custom-select\" name=\"sorttype\" [(ngModel)]=\"sorttype\" style=\"width:25%\" (change)=\"sortByType()\">\n            <option value=\"\">Default</option>\n            <option value=\"ename\">Event Name</option>\n            <option value=\"time\">Time</option>\n            <option value=\"artist\">Artist</option>\n            <option value=\"type\">Type</option>\n          </select>\n          <select class=\"custom-select\" name=\"sortby\" [(ngModel)]=\"sortby\" style=\"width:25%\" [disabled]=\"isDisaSelect\"\n            (change)=\"sortByType()\">\n            <option value=\"asc\">Ascending</option>\n            <option value=\"dec\">Decending</option>\n          </select>\n          <div *ngFor=\"let uc of upcomingList | slice:0:5;\" class=\"card\" style=\"margin-top:2%;font-weight: bold;\">\n            <div class=\"card-body\">\n              <a href=\"{{uc.uri}}\" target=\"_blank\">{{uc?.displayName}}</a><br />\n              <span style=\"color:coral\">Artist:{{uc?.performance[0]?.displayName}}</span> &nbsp;&nbsp;\n              <span style=\"color:darkgray\"> {{uc?.start?.date|date}}&nbsp;{{uc?.start?.time}}</span><br/>\n              Type:{{uc?.type}}\n            </div>\n          </div>\n        </div>\n        <div>\n          <div *ngFor=\"let uc of upcomingList | slice:5;\" [@ecAni]=\"isExpanded ? 'expanded' : 'collapsed'\" class=\"card\"\n            style=\"margin-top:2%;font-weight: bold;\">\n            <div class=\"card-body\">\n              <a href=\"{{uc.uri}}\" target=\"_blank\">{{uc?.displayName}}</a><br />\n              <span style=\"color:coral\">Artist:{{uc?.performance[0]?.displayName}}</span> &nbsp;&nbsp;\n              <span style=\"color:darkgray\"> {{uc?.start?.date|date}}&nbsp;{{uc?.start?.time}}</span><br/>\n              Type:{{uc?.type}}\n            </div>\n          </div>\n        </div>\n        <div style=\"text-align: center;margin-top:2%\">\n          <button class='button' class=\"btn btn-primary\" (click)=\"expColCtl()\"><label *ngIf=\"!isExpanded\">show more</label><label\n              *ngIf=\"isExpanded\">show less</label></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ticket-event/ticket-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ticket-event/ticket-event.component.ts ***!
  \********************************************************/
/*! exports provided: TicketEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketEventComponent", function() { return TicketEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _te_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../te-api.service */ "./src/app/te-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TicketEventComponent = /** @class */ (function () {
    function TicketEventComponent(serv, modalService, activeModal) {
        this.serv = serv;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.keyword = "";
        this.category = "";
        this.distance = "";
        this.unit = "miles";
        this.location1 = "";
        this.latCurrent = "";
        this.lonCurrent = "";
        this.lat = "";
        this.lon = "";
        this.geoPoint = "";
        this.isDisaSearch = true;
        this.islocalInput = false;
        this.locationR = "0";
        this.isChecked = true;
        this.eventsList = [];
        this.isShowEtBar = false;
        this.favoList = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isDisaDetail = true;
        this.isShowEvent = false;
        this.isShowDetail = false;
        this.eventnameD = "";
        this.attractionnames = "";
        this.attractionsList = [];
        this.venueD = "";
        this.dateD = "";
        this.timeD = "";
        this.generD = "";
        this.segmentD = "";
        this.curD = "";
        this.minD = "";
        this.maxD = "";
        this.tsD = "";
        this.btaD = "";
        this.smD = "";
        this.upcomingList = [];
        this.upDefaultList = [];
        this.tweettext = "";
        this.hash = "";
        this.ArtFinalArr = [];
        this.imaFinalArr = [];
        this.reslistctl = true;
        this.sorttype = "";
        this.sortby = "asc";
        this.isDisaSelect = true;
        this.dtIdStar = "";
        this.isnotclear = true;
        this.tabCtl = "";
    }
    //------------------------page setting & control
    TicketEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipAPICall();
        this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300))
            .subscribe(function (searchTextValue) {
            _this.autoCpl(searchTextValue);
        });
    };
    TicketEventComponent.prototype.onKeyUp = function (searchTextValue) {
        this.subject.next(searchTextValue);
    };
    TicketEventComponent.prototype.radioCtl = function () {
        if (this.locationR == '0') {
            this.islocalInput = true;
        }
        else {
            this.islocalInput = false;
        }
    };
    TicketEventComponent.prototype.gobackEventListCtl = function () {
        this.isShowDetail = false;
        this.isShowEvent = true;
        this.isDisSlide = false;
        this.favoList = [];
        for (var i = 0; i < localStorage.length; i++) {
            this.favoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    };
    TicketEventComponent.prototype.gobackDetail = function () {
        this.isShowDetail = true;
        this.isShowEvent = false;
    };
    TicketEventComponent.prototype.seatInModal = function (event, content) {
        event.preventDefault();
        this.modalRef = this.modalService.open(content);
    };
    TicketEventComponent.prototype.closeModal = function () {
        this.modalRef.dismiss("close");
    };
    TicketEventComponent.prototype.expColCtl = function () {
        this.isExpanded = !this.isExpanded;
    };
    TicketEventComponent.prototype.showResult = function (event) {
        this.isDisSlide = true;
        event.preventDefault();
        this.reslistctl = true;
    };
    TicketEventComponent.prototype.showFavorite = function (event) {
        this.isDisSlide = true;
        if (event != undefined) {
            event.preventDefault();
        }
        this.reslistctl = false;
        this.favoList = [];
        if (localStorage.length == 0) {
            this.favoList = null;
        }
        else {
            for (var i = 0; i < localStorage.length; i++) {
                this.favoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    };
    TicketEventComponent.prototype.doClear = function () {
        this.keyword = "";
        this.category = "";
        this.distance = "";
        this.unit = "miles";
        this.isChecked = true;
        this.locationR = "0";
        this.location1 = "";
        this.isDisaSearch = true;
        this.islocalInput = false;
        this.isShowDetail = false;
        this.isShowEvent = false;
        this.isnotclear = false;
        this.reslistctl = true;
    };
    //---------  localstorage
    TicketEventComponent.prototype.addFvrt = function (eid, entity) {
        localStorage.setItem(eid, JSON.stringify(entity));
    };
    TicketEventComponent.prototype.removeFvrt = function (eid) {
        localStorage.removeItem(eid);
        this.hightlightFvrtRow = -1;
        this.isDisaDetail = true;
    };
    TicketEventComponent.prototype.deleteFvrt = function (eid, entity) {
        localStorage.removeItem(eid);
        var index = this.favoList.indexOf(entity);
        this.favoList.splice(index, 1);
        this.hightlightFvrtRow = -1;
        this.isDisaDetail = true;
        if (localStorage.length == 0) {
            this.favoList = null;
        }
    };
    TicketEventComponent.prototype.favoriteCmp = function (eventid) {
        if (localStorage.getItem(eventid) == null) {
            return true;
        }
        else {
            return false;
        }
    };
    //------------------- two dropdown sorting
    TicketEventComponent.prototype.sortByType = function () {
        if (this.sorttype == "") {
            this.isDisaSelect = true;
            this.upcomingList = JSON.parse(JSON.stringify(this.upDefaultList));
        }
        else {
            this.isDisaSelect = false;
            if (this.sorttype == "ename") {
                if (this.sortby == "asc") {
                    this.upcomingList.sort(function (a, b) { return a['displayName'].localeCompare(b['displayName']); });
                }
                else {
                    this.upcomingList.sort(function (a, b) { return b['displayName'].localeCompare(a['displayName']); });
                }
            }
            if (this.sorttype == "time") {
                if (this.sortby == "asc") {
                    this.upcomingList.sort(function (a, b) { return a['start']['date'].localeCompare(b['start']['date']); });
                }
                else {
                    this.upcomingList.sort(function (a, b) { return b['start']['date'].localeCompare(a['start']['date']); });
                }
            }
            if (this.sorttype == "artist") {
                if (this.sortby == "asc") {
                    this.upcomingList.sort(function (a, b) { return a['performance'][0].displayName.localeCompare(b['performance'][0].displayName); });
                }
                else {
                    this.upcomingList.sort(function (a, b) { return b['performance'][0].displayName.localeCompare(a['performance'][0].displayName); });
                }
            }
            if (this.sorttype == "type") {
                if (this.sortby == "asc") {
                    this.upcomingList.sort(function (a, b) { return a['type'].localeCompare(b['type']); });
                }
                else {
                    this.upcomingList.sort(function (a, b) { return b['type'].localeCompare(a['type']); });
                }
            }
        }
    };
    //------------------------call Api directly
    TicketEventComponent.prototype.ipAPICall = function () {
        var _this = this;
        this.serv.goCallIpApi().subscribe(function (result) {
            if (result && result['lat'] && result['lon']) {
                _this.latCurrent = result['lat'];
                _this.lonCurrent = result['lon'];
                _this.isDisaSearch = true;
            }
        });
    };
    //----------------------go Express server
    TicketEventComponent.prototype.autoCpl = function (val) {
        var _this = this;
        this.serv.goCallAutoCpl(val).subscribe(function (result) {
            if (result && result['_embedded'] != null && result['_embedded']['attractions'] != null) {
                _this.autoList = result['_embedded']['attractions'];
            }
        });
    };
    TicketEventComponent.prototype.submitForm = function () {
        this.isShowEvent = true;
        this.reslistctl = true;
        this.isnotclear = true;
        this.isDisSlide = true;
        this.isShowEtBar = true;
        this.hightlightRow = null;
        this.isDisaDetail = true;
        if (this.distance == "") {
            this.distance = '10';
        }
        if (this.locationR == '0') {
            this.lat = this.latCurrent;
            this.lon = this.lonCurrent;
            this.geohashCall();
        }
        else {
            this.goGeocodingCall();
        }
    };
    TicketEventComponent.prototype.goGeocodingCall = function () {
        var _this = this;
        this.serv.goCallGeoCoding(this.location1).subscribe(function (result) {
            if (result != null && result['results'] != null && result['results'].length != 0 && result['results'][0]['geometry'] != undefined && result['results'][0]['geometry']['location'] != undefined) {
                var locationRes = result['results'][0]['geometry']['location'];
                _this.lat = locationRes['lat'];
                _this.lon = locationRes['lng'];
                _this.geohashCall();
            }
        });
    };
    TicketEventComponent.prototype.geohashCall = function () {
        var _this = this;
        this.serv.goCallGeoHash(this.lat, this.lon).subscribe(function (results) {
            _this.geoPoint = results;
            if (_this.geoPoint != null && _this.geoPoint != "") {
                console.log(_this.geoPoint);
                _this.getEventsList();
            }
        });
    };
    TicketEventComponent.prototype.getEventsList = function () {
        var _this = this;
        this.isShowEtBar = true;
        this.serv.getEventsList(this.keyword, this.category, this.distance, this.unit, this.geoPoint).subscribe(function (result) {
            if (result != null && result['_embedded'] != null && result['_embedded'] != undefined && result['_embedded']['events'] != undefined) {
                _this.eventsList = result['_embedded']['events'];
                _this.isShowEvent = true;
                _this.isShowDetail = false;
            }
            else {
                _this.eventsList = null;
            }
            _this.isShowEtBar = false;
        });
    };
    // --------------------- Detail Info Start
    TicketEventComponent.prototype.getDetailInfo = function (flag, event, ind, eventid, eventinfo) {
        var _this = this;
        this.isShowDtpBar = true;
        this.tabCtl = 'a';
        this.dtIdStar = eventid;
        this.dtInfoStar = eventinfo;
        event.preventDefault();
        if (flag == 'res') {
            this.hightlightRow = ind;
            this.hightlightFvrtRow = -1;
        }
        else {
            this.hightlightFvrtRow = ind;
            this.hightlightRow = -1;
        }
        this.isDisaDetail = false;
        this.isShowEvent = false;
        this.serv.getDetialInfo(eventid).subscribe(function (result) {
            _this.isShowDtpBar = false;
            if (result != null) {
                _this.isShowDetail = true;
                _this.eventInfo = result;
                // eventnameD
                if (result['name'] != undefined) {
                    _this.eventnameD = result['name'];
                }
                // ArtistTeam
                if (result['_embedded'] != undefined && result['_embedded'] != null && result['_embedded']['attractions'] != undefined && result['_embedded']['attractions'].length != 0) {
                    _this.attractionsList = result['_embedded']['attractions'];
                    _this.attractionnames = "";
                    for (var i = 0; i < _this.attractionsList.length - 1; i++) {
                        _this.attractionnames += _this.attractionsList[i]['name'] + "|";
                    }
                    _this.attractionnames += _this.attractionsList[_this.attractionsList.length - 1]['name'];
                }
                //VenueD
                if (result['_embedded'] != undefined && result['_embedded'] != null && result['_embedded']['venues'] != undefined && result['_embedded']['venues'].length != 0) {
                    _this.venueD = result['_embedded']['venues'][0].name;
                }
                else {
                    _this.venueD = null;
                }
                // timeD:string="";
                if (result['dates'] != undefined && result['dates'] != null && result['dates']['start'] != undefined && result['dates']['start']['localDate'] != undefined) {
                    _this.dateD = result['dates']['start']['localDate'];
                }
                // timeD:string="";
                if (result['dates'] != undefined && result['dates'] != null && result['dates']['start'] != undefined && result['dates']['start']['localTime'] != undefined) {
                    _this.timeD = result['dates']['start']['localTime'];
                }
                // categoryD:string="";
                if (result['classifications'] != undefined && result['classifications'].length != 0 && result['classifications'][0]['genre'].name != undefined) {
                    _this.generD = result['classifications'][0]['genre'].name;
                }
                if (result['classifications'] != undefined && result['classifications'].length != 0 && result['classifications'][0]['segment'].name != undefined) {
                    _this.segmentD = result['classifications'][0]['segment'].name;
                }
                // prD:string="";
                if (result['priceRanges'] != undefined && result['priceRanges'].length != 0) {
                    if (result['priceRanges'][0]['currency'] != undefined) {
                        _this.curD = result['priceRanges'][0]['currency'];
                    }
                    if (result['priceRanges'][0]['min'] != undefined) {
                        _this.minD = result['priceRanges'][0]['min'];
                    }
                    if (result['priceRanges'][0]['max'] != undefined) {
                        _this.maxD = result['priceRanges'][0]['max'];
                    }
                }
                // tsD:string="";
                if (result['dates'] != undefined && result['dates'] != null && result['dates']['status'] != undefined && result['dates']['status']['code'] != undefined) {
                    _this.tsD = result['dates']['status']['code'];
                }
                // btaD:string="";
                if (result['url'] != undefined && result['url'] != null) {
                    _this.btaD = result['url'];
                }
                // smD:string=""
                if (result['seatmap'] != undefined && result['seatmap']['staticUrl'] != undefined) {
                    _this.smD = result['seatmap']['staticUrl'];
                }
                //twitter
                _this.tweettext = "Check out " + _this.eventnameD + " at " + _this.venueD + ". Website: " + result['url'];
                _this.hash = "CSCI571EventSearch,";
            }
            else {
                _this.eventInfo = null;
            }
        });
    };
    //---------- Call Venue Api
    TicketEventComponent.prototype.getVenueInfo = function () {
        var _this = this;
        this.isShowVenueBar = true;
        this.tabCtl = 'c';
        if (this.venueD != null && this.venueD != "") {
            this.serv.getVenueInfo(this.venueD).subscribe(function (result) {
                _this.isShowVenueBar = false;
                if (result['_embedded'] != undefined && result['_embedded']['venues'] != undefined && result['_embedded']['venues'].length != 0) {
                    _this.venueInfo = result['_embedded']['venues'][0];
                    _this.mapLat = Number(_this.venueInfo['location']['latitude']);
                    _this.mapLon = Number(_this.venueInfo['location']['longitude']);
                }
                else {
                    _this.venueInfo = null;
                }
            });
        }
    };
    //---------- Call upcoming Api
    TicketEventComponent.prototype.getUpcomingInfo = function () {
        var _this = this;
        this.isShowUpcomBar = true;
        this.tabCtl = 'd';
        if (this.venueD != null && this.venueD != "") {
            this.serv.getUpcomingInfo(this.venueD).subscribe(function (result) {
                if (result['resultsPage']['results'] != null && result['resultsPage']['results']['venue'] != null) {
                    var venueid = result['resultsPage']['results']['venue'][0].id;
                    _this.getUpcomingInfoCtn(venueid);
                }
                else {
                    _this.isShowUpcomBar = false;
                    _this.upcomingList = null;
                    _this.upDefaultList = [];
                }
            });
        }
    };
    TicketEventComponent.prototype.getUpcomingInfoCtn = function (venueid) {
        var _this = this;
        this.upcomingList = null;
        this.serv.getUpcomingInfoCtn(venueid).subscribe(function (result) {
            _this.isShowUpcomBar = false;
            if (result != null && result['resultsPage'] != undefined && result['resultsPage']['results'] != undefined && result['resultsPage']['results']['event'] != undefined && result['resultsPage']['results']['event'].length != 0) {
                _this.upcomingList = result['resultsPage']['results']['event'];
                _this.upDefaultList = JSON.parse(JSON.stringify(_this.upcomingList));
            }
        });
    };
    //---------- Call Spotify Api for Artist 
    TicketEventComponent.prototype.extractSame = function (targetname, comArr) {
        for (var i = 0; i < comArr.length; i++) {
            if (targetname == comArr[i]['name']) {
                this.ArtFinalArr.push(comArr[i]);
                break;
            }
        }
    };
    TicketEventComponent.prototype.getArtAndImg = function () {
        this.tabCtl = 'b';
        this.isShowArtBar = true;
        if (this.attractionsList != null && this.attractionsList.length != 0) {
            this.getArtistFirst();
            this.getImages();
        }
        else {
            this.isShowArtBar = false;
        }
    };
    TicketEventComponent.prototype.getArtistFirst = function () {
        var _this = this;
        this.ArtFinalArr = [];
        if (this.segmentD == "Music") {
            this.serv.getArtistInfo(this.attractionsList[0]['name']).subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    if (result['body'] != undefined && result['body']['artists'] != null && result['body']['artists'] != undefined && result['body']['artists']['items'] != undefined) {
                        _this.extractSame(_this.attractionsList[0]['name'], result['body']['artists']['items']);
                    }
                    _this.getArtistOther(1);
                }
                else {
                    if (result['statusCode'] == 401) {
                        _this.getArtistTokenInfo();
                    }
                }
            });
        }
        else {
        }
    };
    TicketEventComponent.prototype.getArtistOther = function (n) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.serv.getArtistInfo(this_1.attractionsList[i]['name']).subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    if (result['body'] != undefined && result['body']['artists'] != null && result['body']['artists'] != undefined && result['body']['artists']['items'] != undefined) {
                        _this.extractSame(_this.attractionsList[i]['name'], result['body']['artists']['items']);
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = n; i < this.attractionsList.length; i++) {
            _loop_1(i);
        }
    };
    //   get Token and then call again
    TicketEventComponent.prototype.getArtistTokenInfo = function () {
        var _this = this;
        this.serv.getArtistTokenInfo().subscribe(function (result) {
            if (result != null && result != undefined && result['token'] != undefined && result['token'] == "yes") {
                _this.getArtistOther(0);
            }
        });
    };
    TicketEventComponent.prototype.getImages = function () {
        var _this = this;
        this.imaFinalArr = [];
        for (var i = 0; i < this.attractionsList.length; i++) {
            this.serv.getImages(this.attractionsList[i]['name']).subscribe(function (result) {
                _this.isShowArtBar = false;
                if (result != null && result['items'] != undefined && result['items'].length != 0) {
                    _this.imaFinalArr.push(result['items']);
                }
            });
        }
    };
    TicketEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ticket-event',
            template: __webpack_require__(/*! ./ticket-event.component.html */ "./src/app/ticket-event/ticket-event.component.html"),
            styles: [__webpack_require__(/*! ./ticket-event.component.css */ "./src/app/ticket-event/ticket-event.component.css")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_5__["slidelr"],
                _animations__WEBPACK_IMPORTED_MODULE_5__["sliderl"],
                _animations__WEBPACK_IMPORTED_MODULE_5__["ecAni"],
                _animations__WEBPACK_IMPORTED_MODULE_5__["hiddenShow"]
            ]
        }),
        __metadata("design:paramtypes", [_te_api_service__WEBPACK_IMPORTED_MODULE_1__["TeApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], TicketEventComponent);
    return TicketEventComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sunaibo/Desktop/571/homework/github/hw8/ticketEventCli/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map