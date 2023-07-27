import './App.css' 
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import First from './pages/FirstPage'
import Second from './pages/SecondPage'
import Third from './pages/ThirdPage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index path='first' element={<First/>}/>
            <Route path='second' element={<Second/>}/>
            <Route path='third' element={<Third />} />
            <Route path='*' element={<h2>Error 404 - no such page</h2>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  ) 
}

export default App 
