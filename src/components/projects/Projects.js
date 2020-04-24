import React, {useState} from 'react';
import './Projects.css';

import {useTrail, animated} from 'react-spring';

const items = ['tja', 'tjo', 'tjimm']
const config = {mass: 30, tension: 1500, friction: 200}

function Projects(){
    /* using useState instead of setState, also imported with react lib */
    const [toggle, set] = useState(true)

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        
        height: toggle ? 80 : 0,
        width: toggle ? 200 : 0,
        /*background: toggle ? 'blue' : 'red', */
        from: {opacity: 0, x: 20, height: 0, width: 0}, 
    })

    return (
        
            <div>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                key={items[index]}
                className="test"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{items[index]}</animated.div>
                </animated.div>
            ))}
            </div>
        
    )


}

export default Projects;