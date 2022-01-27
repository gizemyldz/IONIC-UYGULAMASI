(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"end\" name=\"fast-food-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n     <ion-label><b>RESTORANLAR</b></ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n\n  <ion-segment scrollable value=\"1\">\n    <ion-segment-button value=\"1\">\n      <ion-label>Fast Food</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>Kebap</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      <ion-label>Ev Yemeği</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"4\">\n      <ion-label>Balık</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n\n  <ion-slides [options]=\"options\">\n    \n    <ion-slide>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\"  class=\"poster-col\">\n            <img class=\"poster\" src=\"https://media-cdn.tripadvisor.com/media/photo-s/11/10/eb/01/hereke-balik-rest.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\">Hereke Balık Restoranı</h5>\n            <p class=\"ion-no-margin rate\">\n              <ion-icon name=\"star\"></ion-icon> 5/5\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      \n    </ion-slide>\n    \n    <ion-slide>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"https://media-cdn.tripadvisor.com/media/photo-s/18/09/c8/87/mutlu-kahvalti.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\">Mutlu Kahvaltı</h5>\n            <p class=\"ion-no-margin rate\">\n              <ion-icon name=\"star\"></ion-icon> 5/5\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      \n    </ion-slide>\n    \n    <ion-slide>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\" src=\"https://media-cdn.tripadvisor.com/media/photo-s/10/d3/e7/d3/caption.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\">Köfteci Yusuf</h5>\n            <p class=\"ion-no-margin rate\">\n              <ion-icon name=\"star\"></ion-icon> 3,5/5\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      \n    </ion-slide>\n    \n    <ion-slide>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"poster-col\">\n            <img class=\"poster\"  src=\"https://images.hepsiburada.net/assets/Taris/ProductDesc/BK_WhopperJR_WhopperJr_1500x1500px.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\">\n            <h5 class=\"ion-no-margin\" >Burger King</h5>\n            <p class=\"ion-no-margin rate\">\n              <ion-icon name=\"star\"></ion-icon> 2,5/5\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      \n    </ion-slide>\n    \n  </ion-slides>\n\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-segment {\n  margin: 0 10px;\n}\n\nion-segment-button {\n  text-transform: capitalize;\n  transform: scale(0.8, 0.8);\n  --indicator-color: transparent;\n  color: #969696;\n}\n\nion-segment-button ion-label {\n  position: relative;\n  left: -17px;\n  font-weight: bolder;\n}\n\n.segment-button-checked {\n  color: #333;\n}\n\n.segment-button-checked:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50%;\n  border-bottom: 4px solid #333;\n}\n\nion-badge {\n  padding: 8px 0;\n  border-radius: 18px;\n  color: #8c8c8c;\n  border: 1px solid #8c8c8c;\n  width: 100%;\n  text-align: center;\n}\n\n.poster-col {\n  height: 400px;\n}\n\n.poster-col img {\n  border-radius: 40px;\n}\n\n.rate {\n  font-size: 14px;\n  padding-top: 4px;\n}\n\n.rate ion-icon {\n  color: gold;\n}\n\nh5 {\n  margin-top: 4px;\n}\n\n.swiper-slide-prev {\n  opacity: 0.5;\n  transform: rotate(-8deg);\n}\n\n.swiper-slide-next {\n  opacity: 0.5;\n  transform: rotate(8deg);\n}\n\n.swiper-slide {\n  transition: 0.4s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ047O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0FBREo7O0FBRUk7RUFDRSxtQkFBQTtBQUFOOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDRSxXQUFBO0FBRE47O0FBS0U7RUFDRSxlQUFBO0FBRko7O0FBT0U7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9FO0VBQ0Usb0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCwuOCk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxuICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogLTE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAuc2VnbWVudC1idXR0b24tY2hlY2tlZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMzMzM7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YzhjOGM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBvc3Rlci1jb2wge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiBnb2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoNSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5zd2lwZXItc2xpZGUtcHJldiB7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXBlci1zbGlkZS1uZXh0IHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgdHJhbnNpdGlvbjogLjRzIGFsbDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map