import React, {useState} from 'react';
import './App.css';
/*import {useSpring, animated} from 'react-spring';*/

import NavBar from '../navbar/NavBar';
import Info from '../info/Info';
import Animated from '../animation/Animate';
import Projects from '../projects/Projects';
import Slider from '../slider/Slider';
import NeonBar from '../neonbar/NeonBar';
import NeonLogin from '../neonLogin/neonLogin';

/* use footer later  right now its a test suite*/
import Footer from '../footer/Footer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      info : false,
    }

    this.toggleInfo = this.toggleInfo.bind(this);
  }



  toggleInfo = () => {
    this.setState({
      info : !this.state.info
    });
  }
  //use ""Trail from spring library to render list of elements""

  /* Test to implement onClick passover to Navbar button */
  testrender(){
    const toggle = useState(true)

  }
  
  render(){
    return (
      <div>
        <div className="App">
          
          
            <Slider /> 
            <p>
              Hvaftrudner first portfolio prototype.
            </p>
            <Animated />
            <a
              className="App-link"
              href="https://hvaftrudner.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hvaftrudner.io
            </a>
            <NavBar />
            <NeonBar/>
            <NeonLogin />
          
        </div>
        
      </div>
    )
    }
}

export default App;
