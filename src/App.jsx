<<<<<<< Updated upstream
// import './App.css'
 import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Header  from "./components/Header";
import Footer  from "./components/Footer";
import Food  from "./components/Food";
import Card from './components/Card';

=======
import './App.css'
import ButtonApp from './components/ButtonApp';
import Welcome from './components/student/Welcome';
>>>>>>> Stashed changes



function App() {

  return (
    <>
      <div>
              {/* <h1>Vite React Application</h1> */}

              <Router>

                <Routes>
                  <Route path="/" element={<Header />}></Route>

                  {/* <Route path="/home" element={<Home />}></Route> */}

                  {/* <Route path="/home" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/contact" element={<Contact />}></Route> */}
                  {/* <Route path="/card" element={<Card />}></Route>                  <Route path="/card" element={<Card />}></Route> */}
                  


                  {/* <Route path="/food" element={<Food />}></Route> */}

                  <Route path="/food" element={<Food />}></Route>
                  <Route path="/footer" element={<Footer />}></Route>

                </Routes>
              </Router>

       {/* <Header/> */}
       {/* <Food />        */}

       <Card />
       <Card />
       <Card />
       <Card />

       <Footer /> 
       <Footer /> 
       <Footer /> 


       <Footer /> 
      </div>
      <div> 
        <Welcome />

        <ButtonApp/>
      </div>
     
    </>
  )
}

export default App
