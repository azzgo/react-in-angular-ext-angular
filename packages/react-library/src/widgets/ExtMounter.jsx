import React, { useState } from 'react'
import './styles.css'

export default function ExtMounter({ extendCompList }) {
  const [value, setValue] = useState("")

  return (
    <div className='p2'>
      <h4>这是一个接收组件的小框框</h4>
      <div className='p1'>
        {extendCompList?.map((Comp, idx) => (
          <div key={idx}>
            <Comp
              control={{ value }}
              onChange={(val) => setValue(val)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
