
import React  from 'react'
import About from './Components/About'
import Home from './Components/Home'
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Partner2 from './Components/Partner2'


export default function App() {
  return (

    <Router>
    <nav> 
      <ul class="nav justify-content-center">
<li class="nav-item">
<Link class="nav-link active" aria-current="page" to="/">Home</Link>
</li>
<li class="nav-item">

<Link class="nav-link" to="/About">About</Link>

</li>
<li class="nav-item">

<Link class="nav-link" to="/Partner2">Partner</Link>

</li>
<li class="nav-item">
<Link class="nav-link" to="/Contact">Contact Us</Link>
</li>
</ul>
    </nav>
    <Routes> 
   
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Partner2" element={<Partner2 />} />
      <Route path="/Contact" element={<Contact />} />
 
    </Routes>
    </Router>
 
  )
}

