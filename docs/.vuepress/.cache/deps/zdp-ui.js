import {
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  openBlock,
  renderSlot
} from "./chunk-LP4WYGK4.js";
import "./chunk-C4JIX7AS.js";
import {
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-2B7BBVM6.js";

// dep:zdp-ui
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();

// node_modules/zdp-ui/dist/zdp-ui.es.js
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _sfc_main = {
  name: "zButton"
};
var _hoisted_1 = { class: "btn" };
var _hoisted_2 = createTextVNode("cs");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("button", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_2
      ], true)
    ])
  ]);
}
var zButton = _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3bc43c60"]]);
zButton.install = (app) => {
  app.component(zButton.name, zButton);
};
var install = (app) => {
  app.use(zButton);
};
var ZUI = {
  install
};

// dep:zdp-ui
var zdp_ui_default = ZUI;
export {
  zdp_ui_default as default,
  zButton
};
//# sourceMappingURL=zdp-ui.js.map
