"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'checkbox-group',
  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  }
});

exports.default = _default;