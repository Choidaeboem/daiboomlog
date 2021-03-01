import React from 'react'
import {render} from 'react-dom'

// Utils
import App from './App'

const rootNode = document.querySelector('#react-root')

const Root = () => {
  return <App />
}

if (rootNode) {
  render(<Root />, rootNode)
}
