(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Main);

    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  _createClass(Main, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      $(function () {
        _this.router = new _Router2.default();
      });
    }
  }]);

  return Main;
}();

exports.default = Main;

},{"./Router":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

var _Common = require('../page/Common');

var _Common2 = _interopRequireDefault(_Common);

var _Home = require('../page/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Place = require('../page/Place');

var _Place2 = _interopRequireDefault(_Place);

var _Spot = require('../page/Spot');

var _Spot2 = _interopRequireDefault(_Spot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    this.initialize();
  }

  _createClass(Router, [{
    key: 'initialize',
    value: function initialize() {
      var $body = $('body');

      this.pageCommon = new _Common2.default();

      if ($body.hasClass('page-home')) {
        this.pageHome = new _Home2.default();
      }

      if ($body.hasClass('page-place')) {
        this.pagePlace = new _Place2.default();
      }

      if ($body.hasClass('page-spot')) {
        this.pageSpot = new _Spot2.default();
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

},{"../page/Common":4,"../page/Home":5,"../page/Place":6,"../page/Spot":7,"./ns":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * グローバル直下に変数を置かないよう、ネームスペースを切る。
 * ネームスペース以下の変数にアクセスしたいときは各クラスでこれをimportする
 */

window.App = window.App || {};
var ns = window.App;
exports.default = ns;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Common);

    this.initialize();
  }

  _createClass(Common, [{
    key: 'initialize',
    value: function initialize() {
      console.log('page common');

      this.setEnvClass();

      _ns2.default.spotArr = [{
        "id": 1,
        "name": "モン･ペシェ･ミニョン",
        "address": "神奈川県鎌倉市",
        "lat": 35.3232961,
        "lng": 139.5594026
      }, {
        "id": 2,
        "name": "café vivement dimanche",
        "address": "神奈川県鎌倉市",
        "lat": 35.3203769,
        "lng": 139.5490644
      }, {
        "id": 3,
        "name": "OXYMORON onari",
        "address": "神奈川県鎌倉市",
        "lat": 35.319927,
        "lng": 139.5466479
      }, {
        "id": 4,
        "name": "イワタコーヒー店",
        "address": "神奈川県鎌倉市",
        "lat": 35.3194993,
        "lng": 139.5493172
      }, {
        "id": 5,
        "name": "山海堂",
        "address": "神奈川県鎌倉市長谷4-2-26",
        "lat": 35.3154356,
        "lng": 139.5331683
      }, {
        "id": 6,
        "name": "土屋鞄製造所",
        "address": "神奈川県鎌倉市由比ガ浜1-10-2",
        "lat": 35.3152136,
        "lng": 139.5439841
      }, {
        "id": 7,
        "name": "gram",
        "address": "神奈川県鎌倉市雪ノ下1-5-38",
        "lat": 35.3226184,
        "lng": 139.5505283
      }, {
        "id": 8,
        "name": "スワニー",
        "address": "神奈川県鎌倉市大町1-1-14",
        "lat": 35.3158025,
        "lng": 139.5490282
      }, {
        "id": 9,
        "name": "鎌倉文学館",
        "address": "神奈川県鎌倉市長谷1-5-3",
        "lat": 35.3155273,
        "lng": 139.5367069
      }, {
        "id": 10,
        "name": "湘南ボウル",
        "address": "神奈川県鎌倉市常盤18",
        "lat": 35.3315255,
        "lng": 139.5131561
      }];
    }
  }, {
    key: 'setEnvClass',
    value: function setEnvClass() {
      var $html = $('html');

      _ns2.default.isSp = false;
      _ns2.default.isPc = false;
      _ns2.default.isTab = false;

      if ($html.hasClass('is-sp')) {
        _ns2.default.isSp = true;
      }
      if ($html.hasClass('is-pc')) {
        _ns2.default.isPc = true;
      }
      if ($html.hasClass('is-tab')) {
        _ns2.default.isTab = true;
      }
    }
  }]);

  return Common;
}();

exports.default = Common;

},{"../module/ns":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Home);

    this.initialize();
  }

  _createClass(Home, [{
    key: 'initialize',
    value: function initialize() {
      $('.btn-here').on('click', function (evt) {
        location.replace('./place/');
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

},{"../module/ns":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Place = function () {
  function Place() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Place);

    this.initialize();
  }

  _createClass(Place, [{
    key: 'initialize',
    value: function initialize() {
      this.initMap();
    }
  }, {
    key: 'initMap',
    value: function initMap() {
      var _this = this;

      this.map = new GMaps({
        div: '.gmaps',
        lat: 35.3190056,
        lng: 139.5485442
      });

      _ns2.default.spotArr.forEach(function (spot) {
        _this.map.addMarker({
          lat: spot.lat,
          lng: spot.lng,
          title: spot.name
        });
      });
    }
  }]);

  return Place;
}();

exports.default = Place;

},{"../module/ns":3}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spot = function () {
  function Spot() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Spot);

    this.initialize();
  }

  _createClass(Spot, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      this.count = Math.floor(Math.random() * 12);

      $(window).on('load', function () {
        _this.updateService();
      });

      $('.button-coupon').on('click', function (evt) {
        $('.card-qr').addClass('is-show');
      });

      $('.button-reload').on('click', function () {
        location.reload();
      });
    }
  }, {
    key: 'updateService',
    value: function updateService() {
      var cnt = this.count;
      var $tbl = $('.table-service');

      $('.checkin-text .count').text(cnt);

      $tbl.find('.mdl-checkbox__input').attr('disabled', true);

      if (cnt <= 10) {
        $tbl.find('tr').eq(1).addClass('is-selected');
        $tbl.find('.mdl-checkbox').eq(1).addClass('is-checked');
      }
      if (cnt <= 5) {
        $tbl.find('tr').eq(2).addClass('is-selected');
        $tbl.find('.mdl-checkbox').eq(2).addClass('is-checked');
      }
      if (cnt <= 1) {
        $tbl.find('tr').eq(3).addClass('is-selected');
        $tbl.find('.mdl-checkbox').eq(3).addClass('is-checked');
      }
    }
  }]);

  return Spot;
}();

exports.default = Spot;

},{"../module/ns":3}],8:[function(require,module,exports){
'use strict';

var _ns = require('./module/ns');

var _ns2 = _interopRequireDefault(_ns);

var _Main = require('./module/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// エントリーポイント。indexからはライブラリとこれしか呼ばない

_ns2.default.main = new _Main2.default();

},{"./module/Main":1,"./module/ns":3}]},{},[8]);
