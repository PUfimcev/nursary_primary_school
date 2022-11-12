webpackHotUpdate("main",{

/***/ "./src/components/pages/Home.jsx":
/*!***************************************!*\
  !*** ./src/components/pages/Home.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_pasha_My_portfolio_nursary_primary_school_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main */ "./src/components/Main.jsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App */ "./src/App.js");
/* harmony import */ var _images_Girl_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/Girl.png */ "./src/images/Girl.png");
/* harmony import */ var _images_Girl_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_Girl_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_Boy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/Boy.png */ "./src/images/Boy.png");
/* harmony import */ var _images_Boy_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_Boy_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_GirlBoyBalls_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/GirlBoyBalls.png */ "./src/images/GirlBoyBalls.png");
/* harmony import */ var _images_GirlBoyBalls_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_GirlBoyBalls_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_map_preloder_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/map_preloder.png */ "./src/images/map_preloder.png");
/* harmony import */ var _images_map_preloder_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_map_preloder_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper_modules_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/modules/pagination/pagination.min.css */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var swiper_modules_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_modules_pagination_pagination_min_css__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/Users/pasha/My_portfolio/nursary_primary_school/src/components/pages/Home.jsx";













function Home() {
  var _this = this;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Main__WEBPACK_IMPORTED_MODULE_3__["MainContext"]),
    setCreateContent = _useContext.setCreateContent,
    setNameContent = _useContext.setNameContent,
    setContentAbout = _useContext.setContentAbout,
    ReviewContent = _useContext.ReviewContent;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_4__["DataContacts"]),
    setHomeActive = _useContext2.setHomeActive,
    setAboutActive = _useContext2.setAboutActive,
    setNursaryActive = _useContext2.setNursaryActive,
    setSchoolActive = _useContext2.setSchoolActive,
    setPricesActive = _useContext2.setPricesActive,
    setContactsActive = _useContext2.setContactsActive,
    screenWidth = _useContext2.screenWidth;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
    _useState2 = Object(_Users_pasha_My_portfolio_nursary_primary_school_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState4 = Object(_Users_pasha_My_portfolio_nursary_primary_school_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    btn = _useState4[0],
    setBtn = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    _useState6 = Object(_Users_pasha_My_portfolio_nursary_primary_school_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    indxReview = _useState6[0],
    setIndxReview = _useState6[1];
  var reviewFull = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var refSlider = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  function pageTop() {
    var mainElem = document.querySelector('.main__content');
    mainElem.scrollIntoView({
      block: "start"
    });
  }
  function handleOnLoad() {
    setLoading(false);
  }
  function Preloader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "map__preloader",
      src: _images_map_preloder_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "Google map",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }
    });
  }
  function removeBtnReview() {
    var reviewFullElem = reviewFull.current;
    reviewFullElem.style.animation = 'timeout 1s ease-in-out 1 forwards';
    setTimeout(function () {
      setBtn(false);
      setIndxReview(0);
    }, 1000);
  }
  function setFuncBtn() {
    setBtn(true);
    return;
  }
  function getFuncIndxReview(data) {
    setIndxReview(data);
    return;
  }
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getItemReview();
  }, []);
  function getItemReview() {
    var dataFullContentReview = ReviewContent[indxReview];
    if (!dataFullContentReview) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__full-content_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: reviewFull,
      className: "review__item__full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        removeBtnReview();
      },
      className: "review__btn_remove",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__item__img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: dataFullContentReview.src,
      alt: dataFullContentReview.alt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__item__title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 44
      }
    }, dataFullContentReview.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 85
      }
    }, dataFullContentReview.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__full-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, dataFullContentReview.fullReview))));
  }

  // function slidePrevNext (data){
  // 	let slider = refSlider.current;
  // 	let x = slider.style.transform;
  //     if (!x) {
  //         x = 0;
  //     } else {
  //         x = x.replace('translateX(', '');
  //         x = x.replace('%)', '');
  //         x = Math.abs(x);
  //     }

  //     x += 25 * (data === 'left' ? -1 : 1);
  //     const stopPoint = (ReviewContent.length-2)*25;
  // 	if (x <= stopPoint) slider.style.transform = `translateX(-${x}%)`;
  // 	if (x > stopPoint)  slider.style.transform = `translateX(0%)`;

  //     if (x < 0)  slider.style.transform = `translateX(-${stopPoint}%)`;
  // };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "page__home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "home__present__content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, "\u0434\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0430\u0434 \u2014 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \xAB\u041A\u0435\u0439-\u0414\u0416\u0415\u0419-\u0412\u0438\xBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "home__present__content_description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 6
    }
  }, "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 30 \u043B\u0435\u0442! \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u0443\u0435\u043C\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      setHomeActive(false);
      setAboutActive(true);
      setNursaryActive(false);
      setSchoolActive(false);
      setPricesActive(false);
      setContactsActive(false);
      setPricesActive(false);
      pageTop();
    },
    className: "link__inDetails",
    to: "/about/about/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 253
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 275
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "link__inDetails_arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 288
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_photos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_curcle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_curcle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_curcle3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_photos1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_Girl_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "\u0414\u0435\u0432\u043E\u0447\u043A\u0430",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 54
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_photos2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_Boy_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "\u041C\u0430\u043B\u044C\u0447\u0438\u043A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 54
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__present__content_photos3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_GirlBoyBalls_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "\u0414\u0435\u0442\u0438 \u0432 \u0448\u0430\u0440\u0430\u0445",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 54
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__advantages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "home__advantages_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0430\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 88
    }
  }, "\u0417\u0430\u0431\u043E\u0442\u0430 \u043E \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0440\u0435\u0431\u0435\u043D\u043A\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 88
    }
  }, "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u0440\u0430\u0439\u043E\u043D \u041C\u0438\u043D\u0441\u043A\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 88
    }
  }, "\u0412\u043A\u0443\u0441\u043D\u043E\u0435 \u0438 \u0441\u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 88
    }
  }, "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0440\u0435\u0431\u0435\u043D\u043A\u0443"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 88
    }
  }, "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 88
    }
  }, "\u0423\u0433\u043B\u0443\u0431\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 88
    }
  }, "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "advantages__items",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "advantages__sign_item8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 88
    }
  }, "\u041B\u043E\u0433\u043E\u043F\u0435\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__nursary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__nursary__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "home__nursary__content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }, "\u0414\u0435\u0442\u0441\u043A\u0438\u0439 \u0441\u0430\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "home__nursary__content_description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 6
    }
  }, "\u0422\u0435\u043F\u043B\u0430\u044F \u0438 \u043F\u043E-\u0441\u0435\u043C\u0435\u0439\u043D\u043E\u043C\u0443 \u0434\u043E\u0431\u0440\u0430\u044F \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0432 \u0434\u0435\u0442\u0441\u043A\u043E\u043C \u0441\u0430\u0434\u0443 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0438\u0445 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0432\u0441\u0435\u0445 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u0432.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 206
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 211
    }
  }), "\u0412 \u0434\u043E\u0448\u043A\u043E\u043B\u044C\u043D\u043E\u043C \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u0440\u0435\u0431\u0435\u043D\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0441\u0432\u043E\u0438\u0442\u044C \u043C\u043D\u043E\u0433\u043E \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438: \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0435\u043E\u0434\u0435\u0432\u0430\u0442\u044C\u0441\u044F, \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u043A\u0443\u0448\u0430\u0442\u044C, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C, \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441 \u0434\u0435\u0442\u044C\u043C\u0438 \u0438 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u043C\u0438.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 175
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 181
    }
  }), "\u0412 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0435  \u0432\u0441\u0435\u043C\u0443 \u044D\u0442\u043E\u043C\u0443 \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u043F\u0440\u043E\u0449\u0435. \u0418 \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u044D\u0442\u043E \u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F  \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__nursary__photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__nursary__babies_photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 51
    }
  }, "\u0412 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0434\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u044E\u0442 \u0433\u0440\u0443\u043F\u043F\u044B:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, "\u041C\u043B\u0430\u0434\u0448\u0430\u044F (2-3 \u0433\u043E\u0434\u0430)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "C\u0440\u0435\u0434\u043D\u044F\u044F (4-5 \u043B\u0435\u0442)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "C\u0442\u0430\u0440\u0448\u0430\u044F (5-6 \u043B\u0435\u0442)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__nursary__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "home__nursary__link_price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, "\u043E\u0442 330 $ \u0432 \u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      setHomeActive(false);
      setAboutActive(false);
      setNursaryActive(true);
      setSchoolActive(false);
      setPricesActive(false);
      setContactsActive(false);
      setPricesActive(false);
      pageTop();
    },
    className: "link__inDetails",
    to: "/nursary/junior/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 74
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 326
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 348
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "link__inDetails_arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 361
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__preparatory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__preparatory__photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__preparatory__kids_photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 53
    }
  }, "\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0412\u0430\u043C \u043E\u0442\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438\u0445 \u0434\u0435\u0442\u0435\u0439 \u0432 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u0448\u043A\u043E\u043B\u044B \xAB\u041A\u0435\u0439-\u0414\u0436\u0435\u0439-\u0412\u0438\xBB, \u0433\u0434\u0435 \u0414\u0435\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__preparatory__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "home__preparatory__link_price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "\u043E\u0442 372 $ \u0432 \u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      setHomeActive(false);
      setAboutActive(false);
      setNursaryActive(false);
      setSchoolActive(true);
      setPricesActive(false);
      setContactsActive(false);
      setPricesActive(false);
      pageTop();
    },
    className: "link__inDetails",
    to: "/school/preparatory/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 78
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 334
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 356
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "link__inDetails_arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 369
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__preparatory__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "home__preparatory__content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 6
    }
  }, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "home__preparatory__content_description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0435\u0447\u0438 + \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u044E, \u0433\u0440\u0430\u043C\u043E\u0442\u0435."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0438\u043A\u043B + \u043B\u043E\u0433\u0438\u043A\u0430, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, "\u041E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0441 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u043C."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, "\u041C\u0443\u0437\u044B\u043A\u0430."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, "\u0424\u0438\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__primary__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "home__primary__content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 6
    }
  }, "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u043A\u043E\u043B\u0430 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "home__primary__content_description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 6
    }
  }, "\u0427\u0430\u0441\u0442\u043D\u043E\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \xAB\u041A\u0415\u0419-\u0414\u0416\u0415\u0419-\u0412\u0418\xBB, \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0441 1 \u043F\u043E 4 \u043A\u043B\u0430\u0441\u0441\u044B \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u044F \u0432 \u0448\u043A\u043E\u043B\u0435 \u0441 8.00 \u0434\u043E 15.00 \u0438\u043B\u0438 \u0441 8.00 \u0434\u043E 17.00.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 141
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 147
    }
  }), "\u041C\u044B \u0440\u0430\u0441\u0442\u0438\u043C \u0434\u0443\u043C\u0430\u044E\u0449\u0438\u0445 \u043B\u044E\u0434\u0435\u0439, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0445 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0438 \u0443\u043C\u0435\u044E\u0449\u0438\u0445 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 97
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 103
    }
  }), "\u0412 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0443\u0433\u043B\u0443\u0431\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u0441 1 \u043A\u043B\u0430\u0441\u0441\u0430 (\u0432\u0435\u0434\u0451\u043C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u043A \u041A\u0435\u043C\u0431\u0440\u0438\u0434\u0436\u0441\u043A\u043E\u043C\u0443 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0443 (YLE)).", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 126
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 132
    }
  }), "\u041D\u0430 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u0430\u043D\u0438\u043A\u0443\u043B\u0430\u0445 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u043E\u0442\u0434\u044B\u0445\u0430 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0448\u043A\u043E\u043B\u044B.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__primary__photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__primary__kids_photo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 49
    }
  }, "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0441 1 \u043F\u043E 4 \u043A\u043B\u0430\u0441\u0441\u044B, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u0435 \u0432 \u0433\u0440\u0443\u043F\u043F\u0430\u0445 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043D\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__primary__link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "home__primary__link_price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "\u043E\u0442 470 $ \u0432 \u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      setHomeActive(false);
      setAboutActive(false);
      setNursaryActive(false);
      setSchoolActive(true);
      setPricesActive(false);
      setContactsActive(false);
      setPricesActive(false);
      pageTop();
    },
    className: "link__inDetails",
    to: "/school/primary/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 74
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 326
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 348
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "link__inDetails_arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 361
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video_content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432 3D-\u0442\u0443\u0440 \u043F\u043E \xAB\u041A\u0415\u0419-\u0414\u0416\u0415\u0419-\u0412\u0418\xBB "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "video_content_btn",
    onClick: function onClick() {
      setNameContent('video');
      setContentAbout('school_tour');
      setCreateContent(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 145
    }
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 168
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "home__review__content_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "\u041E\u0442\u0437\u044B\u0432\u044B"), btn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, getItemReview()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "review__content_slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: refSlider,
    className: "review__content_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_9__["Swiper"], {
    slidesPerView: screenWidth > 425 ? 2 : 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      //   clickable: true,
      type: "fraction"
    },
    navigation: true,
    modules: [swiper__WEBPACK_IMPORTED_MODULE_10__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_10__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_10__["Mousewheel"]],
    mousewheel: true,
    keyboard: true,
    longSwipesMs: 1000,
    className: "mySwiper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ReviewContent.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_9__["SwiperSlide"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 28
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__item item".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 53
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__item__img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.src,
      alt: item.alt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__item__title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 49
      }
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 73
      }
    }, item.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "review__short-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 12
      }
    }, item.shortReview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        setFuncBtn();
        getFuncIndxReview(index);
      },
      className: "review__btn",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 12
      }
    }, "\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E"))));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "page__contacts_iframe home_iframe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 4
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Preloader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    title: "\u0410\u0434\u0440\u0435\u0441 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.951570951808!2d27.587888115966827!3d53.950367980110066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf5cad0687f9%3A0x67db471bff3c1228!2z0YPQuy4g0J3QuNC60LjRgtC40L3QsCAzNSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1666895836881!5m2!1sru!2sby",
    onLoad: handleOnLoad,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 6
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=main.35abc0ac2a80794e0177.hot-update.js.map