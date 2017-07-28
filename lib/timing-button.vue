<template>
<button @reset="reset" v-bind="$attrs" @click="clickFn" :disabled="!clickable">{{message}}</button>
</template>


<script>
export default {
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
    "waitingMessage": {
      type: String,
      required: false,
      default: "{{seconds}}s后可再次发送"
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
    clickFn() {
      this.clickable = false;
      this.cb();

      // 每隔 1s 更新文案
      this.intv = window.setInterval(() => {
        if (this.seconds-- > 0) {
          this.message = this.waitingMessage.replace(/{{ *seconds *}}/g, this.seconds);
        } else {
          this.reset();
        }
      }, 1000);
    },
    reset() {
      this.intv && window.clearInterval(this.intv);
      this.clickable = true;
      this.seconds = this.initalSeconds;
      this.message = this.initalMessage;
    }
  }
};
</script>

<style lang="stylus">
</style>
