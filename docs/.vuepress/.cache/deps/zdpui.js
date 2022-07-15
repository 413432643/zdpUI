import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  openBlock,
  ref,
  renderSlot,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-ZT2TARZU.js";
import {
  normalizeClass,
  normalizeStyle,
  toDisplayString
} from "./chunk-VNKCJBW6.js";
import "./chunk-FEFTYQ2P.js";

// node_modules/zdpui/dist/zdpui.es.js
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = (() => ".btn[data-v-74a09a4a]{border:0;padding:8px 15px;outline:none;background:none;line-height:1;font-size:14px;box-sizing:border-box;border-radius:4px;cursor:pointer;display:inline-block;color:#333;border:1px solid #dcdfe6}.btn[data-v-74a09a4a]:hover,.btn[data-v-74a09a4a]:focus{opacity:.8}.btn-primary[data-v-74a09a4a]{color:#fff;background:#409EFF;border:1px solid #409EFF}.btn-success[data-v-74a09a4a]{color:#fff;background:#67C23A;border:1px solid #67C23A}.btn-warning[data-v-74a09a4a]{color:#fff;background:#E6A23C;border:1px solid #E6A23C}.btn-danger[data-v-74a09a4a]{color:#fff;background:#F56C6C;border:1px solid #F56C6C}.btn-info[data-v-74a09a4a]{color:#fff;background:#909399;border:1px solid #909399}.btn-large[data-v-74a09a4a]{padding:12px 20px}.btn-small[data-v-74a09a4a]{font-size:12px;padding:5px 10px}.btn-round[data-v-74a09a4a]{border-radius:1000px}.btn-circle[data-v-74a09a4a]{border-radius:50%;padding:10px}.btn-disabled[data-v-74a09a4a]{opacity:.4;cursor:no-drop}.btn-disabled[data-v-74a09a4a]:hover,.btn-disabled[data-v-74a09a4a]:focus{opacity:.4}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _hoisted_1 = ["disabled", "circle", "round"];
var __default__$1 = {
  name: "ZButton"
};
var _sfc_main$1 = Object.assign(__default__$1, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const zClass = computed(() => {
      return [
        "btn",
        `btn-${props.type}`,
        `btn-${props.size}`,
        props.disabled ? "btn-disabled" : "",
        props.circle ? "btn-circle" : "",
        props.round ? "btn-round" : ""
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(zClass)),
        disabled: __props.disabled,
        circle: __props.circle,
        round: __props.round
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
});
var zButton = _export_sfc(_sfc_main$1, [["__scopeId", "data-v-74a09a4a"]]);
zButton.install = (app) => {
  app.component(zButton.name, zButton);
};
var index_vue_vue_type_style_index_0_scoped_true_lang = (() => ".z-message[data-v-49856940]{position:fixed;left:50%;z-index:9999;width:380px;height:40px;margin-left:-190px;line-height:40px;font-size:14px;border-radius:5px;text-align:center;transition:top .3 ease-out}.z-message div[data-v-49856940]{display:inline-block;padding-left:10px}.z-message i[data-v-49856940]{font-size:12px}.z-message.success[data-v-49856940]{background-color:#f0f9ed;color:#529b2e}.z-message.warning[data-v-49856940]{background-color:#fdf6ec;color:#b88230}.z-message.message[data-v-49856940]{background-color:#f4f4f5;color:#73767a}.z-message.error[data-v-49856940]{background-color:#fef0f0;color:#c45656}.z-message-fade-enter-active[data-v-49856940]{transition:all .3s ease-in}.z-message-fade-leave-active[data-v-49856940]{transition:all .3s ease-out}.z-message-fade-enter-from[data-v-49856940],.z-message-fade-leave-to[data-v-49856940]{opacity:0;transform:translateY(-20px)}.icon-close[data-v-49856940]{position:absolute;right:15px;cursor:pointer}\n")();
var __default__ = {
  name: "ZMessage"
};
var _sfc_main = Object.assign(__default__, {
  props: {
    type: {
      type: String,
      default: "message"
    },
    message: {
      type: String,
      default: "message"
    },
    duration: {
      type: Number,
      default: 3e3
    },
    leftIcon: {
      type: String,
      default: ""
    },
    isClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    let t = null;
    const state = ref(false);
    const top = ref(0);
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
    const close = () => {
      state.value = false;
    };
    const setTop2 = (_top) => {
      top.value = _top;
      return top;
    };
    expose({
      show,
      setTop: setTop2,
      close,
      height: 40,
      margin: 20
    });
    const styleClass = computed(() => {
      return ["z-message", props.type, props.align];
    });
    const iconClass = computed(() => {
      return [
        "iconfont",
        props.leftIcon ? props.leftIcon : props.type == "success" ? "icon-success" : props.type == "message" ? "icon-info" : props.type == "error" ? "icon-error" : props.type == "warning" ? "icon-warning" : ""
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "z-message-fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(unref(styleClass)),
            style: normalizeStyle({ top: top.value + "px" })
          }, [
            createBaseVNode("i", {
              class: normalizeClass(unref(iconClass))
            }, null, 2),
            createBaseVNode("div", null, toDisplayString(__props.message), 1),
            __props.isClose ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "iconfont icon-close",
              onClick: close
            })) : createCommentVNode("", true)
          ], 6), [
            [vShow, state.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
var MessageComponent = _export_sfc(_sfc_main, [["__scopeId", "data-v-49856940"]]);
var messageArr = ref([]);
var Message = (options) => {
  const messageApp = createApp(MessageComponent, options);
  showMessage(messageApp, options.duration);
};
var showMessage = (app, duration) => {
  const oFrag = document.createDocumentFragment();
  const vm = app.mount(oFrag);
  messageArr.value.push(vm);
  console.log(vm);
  setTop(vm);
  vm.show(true);
  watch(messageArr, () => {
    setTop(vm);
  });
  document.body.appendChild(oFrag);
  hideMessage(app, vm, duration);
};
var hideMessage = (app, vm, duration) => {
  vm.timer = setTimeout(async () => {
    await vm.show(false);
    app.unmount();
    messageArr.value = messageArr.value.filter((item) => item !== vm);
    console.log(messageArr.value);
    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration || 3e3);
};
var setTop = (vm) => {
  const { setTop: setTop2, height, margin } = vm;
  const currentIndex = messageArr.value.findIndex((item) => item === vm);
  setTop2(margin * (currentIndex + 1) + height * currentIndex);
};
var install = (app) => {
  app.use(zButton, Message);
  app.config.globalProperties.$message = Message;
};
var ZUI = {
  install
};

// dep:zdpui
var zdpui_default = ZUI;
export {
  Message,
  zdpui_default as default,
  install,
  zButton
};
//# sourceMappingURL=zdpui.js.map
