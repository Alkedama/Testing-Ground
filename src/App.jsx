import { useState } from 'react'
// import './App.css'
import './scss/main.scss'
// import './scss/grid.scss'
// import './scss/gridAdvance.scss'

import Header from './components/header'
import Grid from './projects/grid'
import GridChrome from './projects/gridChrome'
import GridAdvance from './projects/gridAdvance'
import Test from './projects/test'
import ObjectConstructor from './projects/objectConstructor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
    {/* <Grid /> */}
    {/* <GridChrome /> */}
    {/* <GridAdvance /> */}
    {/* <Test /> */}
    <ObjectConstructor />
    </>
  )
}

export default App
