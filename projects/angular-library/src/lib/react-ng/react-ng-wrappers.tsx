import React, { useEffect } from "react";

export default function ReactNgWrapper({ngComp, loadComponent}) {
  const ref = React.useRef(null);
  useEffect(() => {
    loadComponent(ngComp, ref.current)
  }, [ngComp])
  
  return (
    <div className="p-n" style={{border: "1px blue solid"}}>
      <h4>React Component</h4>
      <div ref={ref}></div>
    </div>
  )
}
