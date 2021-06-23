import React, {FunctionComponent, ReactChild} from 'react'
import {Layout} from 'antd'

import SideBar from './Sidebar'

interface Props {
  children: ReactChild
}

const App: FunctionComponent<Props> = ({children}) => {
  const {Footer} = Layout

  return (
    <Layout style={{minHeight: '100vh'}}>
      <SideBar />
      <Layout className="site-layout">
        {children}
        <Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
