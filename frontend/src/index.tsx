import 'babel-polyfill'

import React, {useEffect, useState} from 'react'
import {render} from 'react-dom'

// Components
import App from './App'

// Utils
import {getRootNode} from './utils/nodes'

// Style
import './style/daiboom.scss'

const rootNode = getRootNode()

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
