(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.timingButton = factory());
}(this, (function () {

var timingButton$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{attrs:{"disabled":!_vm.clickable},on:{"click":_vm.clickFn}},[_vm._v(_vm._s(_vm.message))])},staticRenderFns: [],
  name: "timing-button",
  // TODO: 可配置参数
  props: {
    "initalSeconds": {
      type: Number,
      required: false,
      default: 60
    },
    "initalMessage": {
      type: String,
      required: false,
      default: "点击发送验证码"
    },
    "cb": {
      type: Function,
      required: false,
      default: function () {
        console.log("you clicked the button");
      }
    }
  },
  data: function () {
    return {
      message: this.initalMessage,
      seconds: this.initalSeconds,
      clickable: true,
      intv: null
    };
  },
  methods:{
    clickFn: function clickFn() {
      var this$1 = this;

      this.clickable = false;

      // 每隔 1s 更新文案
      this.intv = window.setInterval(function () {
        if (this$1.seconds-- > 0) {
          this$1.message = (this$1.seconds) + "s后可再次发送";
        } else {
          this$1.reset();
        }
      }, 1000);
    },
    reset: function reset() {
      window.clearInterval(this.intv);
      this.clickable = true;
      this.seconds = this.initalSeconds;
      this.message = this.initalMessage;
    }
  }
};

return timingButton$1;

})));
