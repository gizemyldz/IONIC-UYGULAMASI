(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-slides pager=\"true\">\n \n    <!-- Slide 1 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://i.pinimg.com/564x/52/b5/05/52b505495ac7c135ee3272bb403beddc.jpg\">\n        <h1>Merhaba!</h1>\n        <p>Ionic Uygulaması...</p>\n        <ion-button (click)=\"next()\" fill=\"outline\" color=\"light\">Sırada</ion-button>\n      </ion-text>\n    </ion-slide>\n \n    <!-- Slide 2 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"https://i1.wp.com/ionicacademy.com/wp-content/uploads/2020/06/ionic-everywhere-course.png\">\n        <h1>LUCA</h1>\n        <p>...Staj 2 Proje Ödevi </p>\n        <ion-button (click)=\"start()\" fill=\"outline\" color=\"light\">Başla</ion-button>\n      </ion-text>\n    </ion-slide>\n \n  </ion-slides>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/intro/intro-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: IntroPageRoutingModule */

    /***/
    function srcAppPagesIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
        return IntroPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var routes = [{
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
      }];

      var IntroPageRoutingModule = function IntroPageRoutingModule() {
        _classCallCheck(this, IntroPageRoutingModule);
      };

      IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IntroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.module.ts ***!
      \*********************************************/

    /*! exports provided: IntroPageModule */

    /***/
    function srcAppPagesIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
        return IntroPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intro-routing.module */
      "./src/app/pages/intro/intro-routing.module.ts");
      /* harmony import */


      var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./intro.page */
      "./src/app/pages/intro/intro.page.ts");

      var IntroPageModule = function IntroPageModule() {
        _classCallCheck(this, IntroPageModule);
      };

      IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
      })], IntroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/intro/intro.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #69b8e6;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background-active: #fff;\n  --bullet-background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EscUJBQUE7QUFDQTs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbi0tYmFja2dyb3VuZDogIzY5YjhlNjtcclxuXHJcbn1cclxuIFxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/intro/intro.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/intro/intro.page.ts ***!
      \*******************************************/

    /*! exports provided: IntroPage */

    /***/
    function srcAppPagesIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
        return IntroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guards/intro.guard */
      "./src/app/guards/intro.guard.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var IntroPage = /*#__PURE__*/function () {
        function IntroPage(router) {
          _classCallCheck(this, IntroPage);

          this.router = router;
        }

        _createClass(IntroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "start",
          value: function start() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.set({
                        key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__["INTRO_KEY"],
                        value: 'true'
                      });

                    case 2:
                      this.router.navigateByUrl('/login', {
                        replaceUrl: true
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return IntroPage;
      }();

      IntroPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      IntroPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]]
        }]
      };
      IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./intro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./intro.page.scss */
        "./src/app/pages/intro/intro.page.scss"))["default"]]
      })], IntroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-intro-intro-module-es5.js.map