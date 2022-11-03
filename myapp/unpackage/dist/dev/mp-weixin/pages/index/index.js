"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      titleHeight: 0,
      info: [
        { url: "../../static/banner_img/banner_1.jpeg" },
        { url: "../../static/banner_img/banner_1.jpeg" },
        { url: "../../static/banner_img/banner_1.jpeg" }
      ],
      navs: [
        { icon: "shop-filled", text: "\u95E8\u5E97" },
        { icon: "vip-filled", text: "VIP" },
        { icon: "gift-filled", text: "\u6D3B\u52A8" },
        { icon: "medal-filled", text: "\u6392\u884C" },
        { icon: "fire-filled", text: "\u70ED\u95E8" },
        { icon: "pyq", text: "\u5708\u5B50" }
      ],
      current: 0,
      mode: "default"
    };
  },
  onLoad() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      let res = wx.getMenuButtonBoundingClientRect();
      this.titleHeight = res.height;
    },
    showCart() {
      common_vendor.index.showToast({
        title: "\u6B63\u5728\u5F00\u53D1\u4E2D...",
        icon: "none"
      });
    },
    toSearch() {
      common_vendor.index.showToast({
        title: "\u6B63\u5728\u5F00\u53D1\u4E2D",
        icon: "none"
      });
    },
    change(e) {
      this.current = e.detail.current;
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  (_easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_icons2 + _easycom_uni_nav_bar2 + _easycom_uni_swiper_dot2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row + _easycom_uni_icons + _easycom_uni_nav_bar + _easycom_uni_swiper_dot)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      xs: 24,
      sm: 24
    }),
    b: common_vendor.p({
      type: "search",
      size: "18"
    }),
    c: common_vendor.o((...args) => $options.toSearch && $options.toSearch(...args)),
    d: $data.titleHeight - 6 + "px",
    e: $data.titleHeight - 6 + "px",
    f: common_vendor.o($options.showCart),
    g: common_vendor.p({
      leftWidth: "60rpx",
      ["left-icon"]: "cart",
      height: $data.titleHeight + "px",
      backgroundColor: "#FFF000"
    }),
    h: $data.titleHeight + "px",
    i: common_vendor.p({
      xs: 24,
      sm: 24
    }),
    j: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: item.url,
        b: index
      };
    }),
    k: common_vendor.o((...args) => $options.change && $options.change(...args)),
    l: common_vendor.p({
      info: $data.info,
      current: $data.current,
      field: "content",
      mode: $data.mode
    }),
    m: common_vendor.p({
      xs: 24,
      sm: 24
    }),
    n: common_vendor.f($data.navs, (item, index, i0) => {
      return {
        a: "508c22d4-13-" + i0 + "," + ("508c22d4-12-" + i0),
        b: common_vendor.p({
          type: item.icon,
          size: "30"
        }),
        c: common_vendor.t(item.text),
        d: index,
        e: "508c22d4-12-" + i0 + ",508c22d4-11"
      };
    }),
    o: common_vendor.p({
      xs: 4,
      sm: 4
    }),
    p: common_vendor.p({
      xs: 24,
      sm: 24
    }),
    q: common_vendor.f(2, (item, index, i0) => {
      return {
        a: "508c22d4-15-" + i0 + "," + ("508c22d4-14-" + i0),
        b: "508c22d4-16-" + i0 + "," + ("508c22d4-14-" + i0),
        c: index,
        d: "508c22d4-14-" + i0
      };
    }),
    r: common_vendor.p({
      xs: 12,
      sm: 12
    }),
    s: common_vendor.p({
      xs: 12,
      sm: 12
    }),
    t: common_vendor.p({
      gutter: 10
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/GitHub/learn/myapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
