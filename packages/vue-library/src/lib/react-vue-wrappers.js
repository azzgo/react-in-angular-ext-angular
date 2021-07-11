import React, { useEffect, useRef, useMemo } from "react";
import { ExtMounter } from "react-library";

const ExtendCompVueWrapper = (vueComp, loadComponent) => ({
  control,
  onChange
}) => {
  const domRef = useRef(null);

  useEffect(() => {
    loadComponent(vueComp, domRef.current, function(compRef) {
      compRef.$props.control = control;
      compRef.$once('change', (val) => onChange(val))
    });
  }, [control]);

  return React.createElement("div", { ref: domRef })
};

export default function ReactVueWrapper({ vueComps, loadComponent }) {
  const extras = useMemo(() => {
    return vueComps?.map((vueComp) => ExtendCompVueWrapper(vueComp, loadComponent)) || [];
  }, [vueComps]);
  return React.createElement(
    'div',
    { className: "p-n", style: { border: "1px blue solid" } },
    [
      React.createElement("h4", null, "React Component"),
      React.createElement("div", null, [
        React.createElement(ExtMounter, { extendCompList: extras })
      ])
    ]
  );
}
