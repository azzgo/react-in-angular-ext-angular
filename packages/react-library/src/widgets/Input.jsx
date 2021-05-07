import React from 'react'

export default function Input({control, onChange}) {
  const { value } = control

  return <input value={value} onChange={(event) => onChange(event.target.value)} />
}
