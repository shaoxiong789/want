"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _popup = _interopRequireDefault(require("../mixins/popup"));

var _swipe = _interopRequireDefault(require("../swipe"));

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.value ? _c('div', {
      class: _vm.b(),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_c('swipe', {
      ref: "swipe",
      attrs: {
        "initial-swipe": _vm.startPosition
      }
    }, _vm._l(_vm.images, function (item, index) {
      return _c('swipe-item', {
        key: index
      }, [_c('img', {
        class: _vm.b('image'),
        attrs: {
          "src": item
        }
      })]);
    }))], 1) : _vm._e();
  },
  name: 'image-preview',
  mixins: [_popup.default],
  components: {
    Swipe: _swipe.default,
    SwipeItem: _swipeItem.default
  },
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onTouchStart: function onTouchStart() {
      this.touchStartTime = new Date();
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();
      var deltaTime = new Date() - this.touchStartTime;
      var _this$$refs$swipe = this.$refs.swipe,
          offsetX = _this$$refs$swipe.offsetX,
          offsetY = _this$$refs$swipe.offsetY; // prevent long tap to close component

      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    }
  }
});

exports.default = _default2;