import React from 'react'
import Mode from './components/Mode'
import Todo from './components/Todo'
import ShoppingCart from './components/ShoppingCart'
import UserAuth from './components/UserAuth'
import Language from './components/Language'

function App() {
  return (
    <div className='flex flex-col items-center gap-15 mt-5 mx-auto'>
      <Mode/>
      <Todo/>
      <ShoppingCart/>
      <UserAuth/>
      <Language/>
    </div>
  )
}

export default App