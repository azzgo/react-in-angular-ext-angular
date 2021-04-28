import { ComponentRef } from "@angular/core";
import React, { useEffect, useRef, useMemo } from "react";
import { ExtMounter } from "react-library";

const ExtendCompNgWrapper = (ngComp, loadComponent) => ({
  control,
  onChange,
}) => {
  const domRef = useRef(null);

  useEffect(() => {
    loadComponent(ngComp, domRef.current, function (compRef) {
      compRef.instance.control = control;
      compRef.instance.onChange = onChange;
    });
  }, [control]);

  return <div ref={domRef}></div>;
};

export default function ReactNgWrapper({ ngComps, loadComponent }) {
  const extras = useMemo(() => {
    return ngComps?.map((ngComp) => ExtendCompNgWrapper(ngComp, loadComponent)) || [];
  }, [ngComps]);
  return (
    <div className="p-n" style={{ border: "1px blue solid" }}>
      <h4>React Component</h4>
      <div>
        <ExtMounter extendCompList={extras} />
      </div>
    </div>
  );
}
