import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListStayComponent from './components/ListStayComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <HeaderComponent/>
      <div className='content'>
        <h1 className="text-center">Netomari.</h1>
        <ListStayComponent/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default App;
