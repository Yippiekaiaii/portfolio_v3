
import './App.css'
import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

//Import Components
import Layout from './components/Layout.js'
import Home from './components/Home.js'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>    
          <Route path="/" element={<Layout/>}> 
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/Contact" element={<Contact/>}/>
          </Route>   
    </Route>
  )
)

function App() {
  return (      
      <RouterProvider router={router} />    
  )


}

export default App;
