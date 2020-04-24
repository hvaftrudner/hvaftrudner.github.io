import React from 'react';

import {useSpring, animated} from 'react-spring';
import './Animate.css';


function Animated() {
    //use Config in usespring to change behavior of animation.
    const props = useSpring({config: {duration: 10000}, opacity: 1, from: {opacity: 0}})
    
    const props2 = useSpring({config: {duration: 5000}, opacity: 1, from: {opacity: 0}})
   

    return (
            <animated.div style={props}>
                <div className="first">
                    <h3>
                        tja
                    </h3>
                    <animated.div style={props2} className="second"> Tjena </animated.div>
                    

                </div>
            </animated.div>
            )
}

export default Animated;