import React, { useEffect } from "react";

export default function RenderExt({ngComps, loadComponent}) {
  const ref = React.useRef(null);
  useEffect(() => {
    loadComponent(ngComps.hello, ref.current)
  }, [ngComps, ref.current])
  
  return (
    <div>
      <h4>RenderExt</h4>
      <div ref={ref}></div>
    </div>
  )
}
