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
      class: _vm.b({
        on: _vm.value === true || _vm.value == _vm.activeValue,
        disabled: _vm.disabled
      }),
      style: _vm.style,
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('node')
    }, [_vm.loading ? _c('loading', {
      class: _vm.b('loading')
    }) : _vm._e()], 1)]);
  },
  name: 'switch',
  props: {
    value: [Boolean, String],
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: String,
    inactiveValue: String
  },
  computed: {
    style: function style() {
      return {
        fontSize: this.size
      };
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.disabled && !this.loading) {
        if (this.activeValue === this.value) {
          this.$emit('input', this.inactiveValue || !this.value);
          this.$emit('change', this.inactiveValue || !this.value);
          return;
        }

        if (this.inactiveValue === this.value) {
          this.$emit('input', this.activeValue || !this.value);
          this.$emit('change', this.activeValue || !this.value);
          return;
        }

        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
});

exports.default = _default;