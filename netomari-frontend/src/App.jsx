import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListStayComponent from './components/ListStayComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <BrowserRouter>
        <HeaderComponent/>
          <div className='content'>
            <h1 className="text-center">Netomari.</h1>
            {/* <ListStayComponent/> */}
            <Routes>
                {/* // http://localhost:5173 */}
                <Route path='/' element = { <ListStayComponent/> }/>
                {/* // http:/localhost:5173/stays */}
                <Route path='/stays' element = { <ListStayComponent/> }/>
            </Routes>
          </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App;
