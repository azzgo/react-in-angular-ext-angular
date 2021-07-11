<template>
  <div></div>
</template>
<script>
import ReactDom from "react-dom";
import React from "react";
import ReactVueWrapper from "./react-vue-wrappers";

import Vue from "vue";

const _cacheCompRefs = new WeakMap();

export default {
  name: "ReactVue",
  props: {
    vueComps: Array,
  },
  watch: {
    vueComps: {
      handler(val) {
        setTimeout(() => {
          ReactDom.render(
            React.createElement(ReactVueWrapper, {
              vueComps: val,
              loadComponent: this.loadComponent,
            }),
            this.$el
          );
        });
      },
      immediate: true,
    },
  },
  methods: {
    loadComponent(vueComp, dom, callback) {
      let vueCompRef;

      if (dom?.childNodes.length === 0) {
        vueCompRef = new (Vue.extend(vueComp))({
          el: document.createElement("div"),
        });

        const compEl = vueCompRef.$el;
        _cacheCompRefs.set(compEl, vueCompRef);
        callback && callback(vueCompRef);
        dom?.appendChild(compEl);
      } else if (dom?.childNodes.length > 0) {
        vueCompRef = _cacheCompRefs.get(dom.childNodes[0]);
        callback && callback(vueCompRef);
      }

      return vueCompRef;
    },
  },
};
</script>
