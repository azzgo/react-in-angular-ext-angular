import React from 'react'

export default function Description({control}) {
  const { value } = control

  return  <p>这是一段描述，描述文本是 {value}</p>
}
