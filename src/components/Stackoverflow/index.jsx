import React from 'react'
import './index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import './index.css'

const index = () => {

  return (
    <div className='stack-index'>
        <div className="stack-index-component">
          <Sidebar/>
          <Main/>
        </div>
    </div>
  )
}

export default index