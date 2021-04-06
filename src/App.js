import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'


function App() {
  return (
    <div>
      <Particles
        className="paricles-canvas"
        params={{
          particles: {
            number: {
              value:30,
              density: {
                enable: true,
                value_area:900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color:"#f9ab00"
              }
            }
          }
        }}
      />
      
    
      <Navbar />
      <Header />
      <About/>
    
    </div>
  )
}

export default App;
