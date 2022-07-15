<template>
  <div class="container" v-down>
    <z-input
      v-model="defaultTime"
      class="input"
      :leftIcon="leftIcon"
      :clearable="clearable"
      :placeholder="placeholder"
      :interval="interval"
      @focus="focus"
      @input="input"
    ></z-input>
    <div class="time" v-show="timeShow">
      <div class="time-body" @scroll="scroll">
        <div class="hour" :id="'hour' + props.id" @scroll="hScroll">
          <div
            v-for="item in hourList[0]"
            :key="item.hour"
            :class="hClass(item)"
            @click="timeClick(item.hour, $event)"
          >
            {{ item.hour }}
          </div>
        </div>
        <div class="minute" :id="'minute' + props.id" @scroll="mScroll">
          <div
            v-for="item in minuteList[0]"
            :key="item.minute"
            :class="mClass(item)"
            @click="timeClick(item.minute, $event)"
          >
            {{ item.minute }}
          </div>
        </div>
        <div class="second" :id="'second' + props.id" @scroll="sScroll">
          <div
            v-for="item in secondList[0]"
            :key="item.second"
            :class="sClass(item)"
            @click="timeClick(item.second, $event)"
          >
            {{ item.second }}
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
import { ref, computed,watch } from "vue";
import ZInput from "../input";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  modelValue: String,
  id: {
    type: String,
    default: "",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  interval: {
    type: Number,
    default: 500,
  },
  scrollInterval: {
    type: Number,
    default: 200,
  },
  leftIcon: {
    type: String,
    default: "icon-time",
  },
  disabledHour: {
    type: Function,
    default: function () {},
  },
  disabledMinute: {
    type: Function,
    default: function () {},
  },
  disabledSecond: {
    type: Function,
    default: function () {},
  },
});

const date = new Date();
const hour = ref((date.getHours() < 10 ? "0" : "") + date.getHours());
const minute = ref((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
const second = ref((date.getSeconds() < 10 ? "0" : "") + date.getSeconds());

const timeShow = ref(false);
const thisMoment = hour.value + ":" + minute.value + ":" + second.value;
const defaultTime = ref(props.modelValue || thisMoment);

// 获取焦点
const focus = () => {
  timeShow.value = true;
  setTimeout(() => {
    timeChanged(defaultTime.value);
  }, 1);
};
//元素外收起
const vDown = {
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

const hClass = computed(() => (item) => {
  return [
    hour.value == item.hour && !item.disabled ? "select" : "",
    item.disabled ? "disabled" : "",
  ];
});
const mClass = computed(() => (item) => {
  return [
    minute.value == item.minute && !item.disabled ? "select" : "",
    item.disabled ? "disabled" : "",
  ];
});
const sClass = computed(() => (item) => {
  return [
    second.value == item.second && !item.disabled ? "select" : "",
    item.disabled ? "disabled" : "",
  ];
});

const hourList = computed(() => {
  let arr = [];
  let selectArr = [];
  for (let i = 0; i < 24; i++) {
    let obj = {
      hour: (i < 10 ? "0" : "") + i,
      disabled: false,
      top: i * 30,
    };
    if (props.disabledHour() && props.disabledHour().indexOf(i) != -1) {
      obj.disabled = true;
    }
    if (obj.disabled == false) {
      selectArr.push(i);
    }

    arr.push(obj);
  }
  return [arr, selectArr];
});

const minuteList = computed(() => {
  let arr = [];
  let selectArr = [];
  for (let i = 0; i < 60; i++) {
    let obj = {
      minute: (i < 10 ? "0" : "") + i,
      disabled: false,
      top: i * 30,
    };
    if (
      props.disabledMinute(hour.value) &&
      props.disabledMinute(hour.value).indexOf(i) != -1
    ) {
      obj.disabled = true;
    }
    if (obj.disabled == false) {
      selectArr.push(i);
    }
    arr.push(obj);
  }
  return [arr, selectArr];
});

const secondList = computed(() => {
  let arr = [];
  let selectArr = [];
  for (let i = 0; i < 60; i++) {
    let obj = {
      second: (i < 10 ? "0" : "") + i,
      disabled: false,
      top: i * 30,
    };
    if (
      props.disabledSecond(hour.value, minute.value) &&
      props.disabledSecond(hour.value, minute.value).indexOf(i) != -1
    ) {
      obj.disabled = true;
    }
    if (obj.disabled == false) {
      selectArr.push(i);
    }
    arr.push(obj);
  }
  return [arr, selectArr];
});

//滚动事件
let h = null;
let m = null;
let s = null;

const hScroll = (e) => {
  return (function () {
    if (h != null) clearTimeout(h);
    h = setTimeout(() => {
      scroll(e);
    }, props.scrollInterval);
  })();
};
const mScroll = (e) => {
  return (function () {
    if (m != null) clearTimeout(m);
    m = setTimeout(() => {
      scroll(e);
    }, props.scrollInterval);
  })();
};
const sScroll = (e) => {
  return (function () {
    if (s != null) clearTimeout(s);
    s = setTimeout(() => {
      scroll(e);
    }, props.scrollInterval);
  })();
};

// 限制滚动
const findTop = (top, arr) => {
  let _arr = [];
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    _arr.push(Math.abs(top - arr[i]));
    if (_arr[i] < _arr[min]) min = i;
  }
  return arr[min];
};

const scroll = (e) => {
  let className = e.path[0].className;
  let length = e.path[0].children.length;
  let top = e.target.scrollTop;
  // 禁止范围
  if (
    props.disabledHour() ||
    props.disabledMinute(hour.value) ||
    props.disabledSecond(hour.value, minute.value)
  ) {
    if (
      eval(className) &&
      findTop(top / 30, eval(className + "List").value[1])
    ) {
      top = findTop(top / 30, eval(className + "List").value[1]) * 30;
    }
  }
  

  // 指定高度元素赋值
  for (let i = 0; i < length; i++) {
    if (top == 30 * i) {
      eval(className).value = (i < 10 ? "0" : "") + i;
      defaultTime.value = hour.value + ":" + minute.value + ":" + second.value;
    }
  }
  // 滚动30的倍数
  e.target.scrollTop = top - (top % 30);
};

// 时间改变时触发
const timeChanged = (value) => {
  const defaultHour = value.substr(0, value.indexOf(":"));
  const defaultMinute = value.substr(3, value.indexOf(":"));
  const defaultSecond = value.substr(6, value.lastIndexOf(":"));

  document.getElementById("hour" + props.id).scrollTop = defaultHour * 30;
  document.getElementById("minute" + props.id).scrollTop = defaultMinute * 30;
  document.getElementById("second" + props.id).scrollTop = defaultSecond * 30;

  emit("update:modelValue", value);
};
//点击滚动
const timeClick = (h, e) => {
  let parentTop = e.path[1].scrollTop;
  e.path[1].scrollTop += h * 30 - parentTop;
};
//输入框
const input = (e) => {
  timeChanged(e);
};
//此刻
const now = () => {
  timeChanged(thisMoment);
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

.disabled {
  cursor: not-allowed !important;
  color: #eee !important;
}
</style>
