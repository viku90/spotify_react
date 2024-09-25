import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex '>
        <Sidebar/>
        <Display/>
      </div>
      <div>
        <Player/>
      </div>

    </div>
  )
}

export default App