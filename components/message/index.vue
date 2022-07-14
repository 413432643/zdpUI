<template>
  <transition name="z-message-fade">
    <div :class="styleClass" v-show="state" :style="{ top: top + 'px' }">
      <i class="iconfont icon-seleted"></i>
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ZMessage",
};
</script>

<script setup>
import { ref, computed, reactive, toRefs } from "vue";
const emit = defineEmits(["update:modelValue", "change"]);
let t = null;
const state = ref(false);
const top = ref(0);

const props = defineProps({
  type: {
    type: String,
    default: "message",
  },
  message: {
    type: String,
    default: "message",
  },
  duration: {
    type: Number,
    default: 3000,
  },
});
const show = (isShow) => {
  state.value = isShow;
  return new Promise((resolve) => {
    t = setTimeout(() => {
      clearTimeout(t);
      t = null;
      resolve("");
    }, 300);
  });
};

const setTop = (_top) => {
  top.value = _top;
  return top;
};

defineExpose({
  show,
  setTop,
  height: 40,
  margin: 20,
});

const styleClass = computed(() => {
  return ["z-message", props.type, props.align];
});
</script>

<style lang="scss" scoped>
.z-message {
  position: fixed;
  left: 50%;
  z-index: 9999;
  width: 380px;
  height: 40px;
  margin-left: -190px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  transition: top 0.3 ease-out;
  div {
    display: inline-block;
    padding-left: 10px;
  }
  i {
    font-size: 12px;
  }
  &.success {
    background-color: #f0f9ed;
    color: #529b2e;
  }
  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
  }
  &.message {
    background-color: #f4f4f5;
    color: #73767a;
  }
  &.error {
    background-color: #fef0f0;
    color: #c45656;
  }
}

.z-message-fade-enter-active {
  transition: all 0.3s ease-in;
}
.z-message-fade-leave-active {
  transition: all 0.3s ease-out;
}
.z-message-fade-enter-from,
.z-message-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
