import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { Globals } from './global/styles'

export const App:React.FC = () => {

  return (
    <div className="App">
      <Globals />
       <Header />
        <Main />
    </div>
  )
}

