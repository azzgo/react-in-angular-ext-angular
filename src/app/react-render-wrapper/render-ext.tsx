import React, { useEffect } from "react";

export default function RenderExt({ngComps, loadComponent}) {
  const ref = React.useRef(null);
  useEffect(() => {
    loadComponent(ngComps.hello, ref.current)
  }, [ngComps, ref.current])
  
  return (
    <div style={{border: "1px blue solid"}}>
      <h4>React Component</h4>
      <div ref={ref}></div>
    </div>
  )
}
