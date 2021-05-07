import React from 'react'

import { ExtMounter, Input, Description } from 'react-library'
import 'react-library/dist/index.css'

const App = () => {
  return <ExtMounter extendCompList={[Input, Description]} />
}

export default App
