import 'babel-polyfill'

import React, {useEffect, useState} from 'react'
import {render} from 'react-dom'

// Components
import App from './App'

// Style
import './style/daiboom.scss'

const rootNode = document.getElementById('react-root')

const Root = () => {
  const [ready, isReady] = useState(false)
  useEffect(() => {
    isReady(true)
  }, [])

  return ready ? <App /> : null
}

if (rootNode) {
  render(<Root />, rootNode)
}
