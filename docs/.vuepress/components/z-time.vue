<template>
  <div class="container" v-down>
    <z-input
      v-model="defaultTime"
      class="input"
      leftIcon="icon-time"
      clearable
      @focus="focus"
      @input="input"
    ></z-input>
    <div class="time" v-show="timeShow">
      <div class="time-body" @scroll="scroll">
        <div class="hour" id="hour" @scroll="itemScroll">
          <div
            v-for="(item, h) in 24"
            :key="h"
            :class="hClass(h)"
            @click="timeClick(h, $event)"
          >
            {{ (h < 10 ? "0" : "") + h }}
          </div>
        </div>
        <div class="minute" id="minute" @scroll="itemScroll">
          <div
            v-for="(item, m) in 60"
            :key="m"
            :class="mClass(m)"
            @click="timeClick(m, $event)"
          >
            {{ (m < 10 ? "0" : "") + m }}
          </div>
        </div>
        <div class="second" id="second" @scroll="itemScroll">
          <div
            v-for="(item, s) in 60"
            :key="s"
            :class="sClass(s)"
            @click="timeClick(s, $event)"
          >
            {{ (s < 10 ? "0" : "") + s }}
          </div>
        </div>
      </div>
      <div class="selectRegion"></div>
      <div class="time-foot">
        <div class="now" @click="now">此刻</div>
        <div class="ok" @click="ok">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { ZInput },
  name: "ZTime",
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import ZInput from "./z-input.vue";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  modelValue: String,
});

// // 默认日期

const date = new Date();
const hour = ref((date.getHours() < 10 ? "0" : "") + date.getHours());
const minute = ref((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
const second = ref((date.getSeconds() < 10 ? "0" : "") + date.getSeconds());

const timeShow = ref(false);

const thisMoment = hour.value + ":" + minute.value + ":" + second.value;

const defaultTime = ref(props.modelValue || thisMoment);

const focus = () => {
  timeShow.value = true;
  setTimeout(() => {
    timeChanged();
  }, 100);
};

const vDown = {
  //元素外收起
  beforeMount(el) {
    let hander = (e) => {
      if (props.disabled) return;
      if (!el.contains(e.target)) {
        timeShow.value = false;
      }
    };
    document.addEventListener("click", hander);
  },
};

const hClass = computed(() => (h) => {
  return [hour.value == h ? "select" : ""];
});
const mClass = computed(() => (m) => {
  return [minute.value == m ? "select" : ""];
});
const sClass = computed(() => (s) => {
  return [second.value == s ? "select" : ""];
});

const itemScroll = (e) => {
  //滚动事件
  let t = null;

  return (function () {
    if (t != null) clearTimeout(t);
    t = setTimeout(() => {
      // 滚动30的倍数
      let top = e.target.scrollTop;
      e.target.scrollTop = top - (top % 30);
      // 指定高度的元素
      let className = e.path[0].className;
      let length = e.path[0].children.length;
      for (let i = 0; i < length; i++) {
        let childrenTop = 30 * i;
        if (top == childrenTop) {
          if (
            className == "hour" ||
            className == "minute" ||
            className == "second"
          ) {
            eval(className).value = (i < 10 ? "0" : "") + i;
            defaultTime.value =
              hour.value + ":" + minute.value + ":" + second.value;
          }
        }
      }
    }, 700);
  })();
};

// 时间改变时触发
const timeChanged = () => {
  const defaultHour = defaultTime.value.substr(
    0,
    defaultTime.value.indexOf(":")
  );
  const defaultMinute = defaultTime.value.substr(
    3,
    defaultTime.value.indexOf(":")
  );
  const defaultSecond = defaultTime.value.substr(
    6,
    defaultTime.value.lastIndexOf(":")
  );
  document.getElementById("hour").scrollTop = defaultHour * 30;
  document.getElementById("minute").scrollTop = defaultMinute * 30;
  document.getElementById("second").scrollTop = defaultSecond * 30;

  emit("update:modelValue", defaultTime.value);
};
//点击滚动
const timeClick = (h, e) => {
  let parentTop = e.path[1].scrollTop;
  e.path[1].scrollTop += h * 30 - parentTop;
};
//输入框
const input = (e) => {
  setTimeout(() => {
    timeChanged();
  }, 100);
  emit("update:modelValue", e);
};
//此刻
const now = () => {
  defaultTime.value = thisMoment;
  setTimeout(() => {
    timeChanged();
  }, 100);
  emit("update:modelValue", defaultTime.value);
};
// 完成
const ok = () => {
  timeShow.value = false;
};
</script>

<style lang="scss" scoped>
.container {
  width: 160px;

  .input {
    margin-bottom: 10px;
  }

  .time {
    position: absolute;
    width: 180px;
    border: 1px solid #d4d3d3;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 9;

    &-body {
      width: 100%;
      max-height: 200px;
      display: flex;

      .hour,
      .minute,
      .second {
        width: 33.33%;
        overflow-y: scroll;
        padding: 90px 0;
        scroll-behavior: smooth;
        div {
          font-size: 12px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          color: #606266;
          cursor: pointer;
        }

        :hover {
          background: #eee;
        }

        &::-webkit-scrollbar {
          width: 5px;
          height: 1px;
        }

        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          background: #ffffff;
        }

        &:hover {
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 4px;
            background: #e5e5e5;
          }
        }
      }
    }

    &-foot {
      display: flex;
      font-size: 12px;
      justify-content: right;
      padding: 8px 10px;
      border-top: 1px solid #eee;

      .now,
      .ok {
        padding: 0 5px;
        cursor: pointer;
      }

      .ok {
        color: #409eff;
      }
    }
  }
}

.select {
  font-weight: 900;
}

.selectRegion {
  top: 90px;
  position: absolute;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  z-index: 999;
  height: 30px;
  width: 150px;
  margin: 0 15px;
}
</style>
