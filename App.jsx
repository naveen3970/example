import {  lazy, Suspense } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Component from './HOCComp'
const Analytics=lazy(()=> import ("./Analytics"))
const Reports=lazy(()=> import ("./Reports"))
function App() {

  return (
    <>
      <Dashboard/>
      <Suspense
fallback ={<div> loading please wait...</div>}>
<Analytics/>
<Reports data={"user Data Reports are generating..."}/>
</Suspense>
<Component/>
    </>
  )
}

export default App
