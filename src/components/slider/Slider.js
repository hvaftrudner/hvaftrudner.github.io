import './Slider.css';
import React, {useState, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';

const slides = [
    {id: 0, backgroundColor: 'black'},
    {id: 1, backgroundColor: 'red'},
    {id: 2, backgroundColor: 'yellow'},
    {id: 3, backgroundColor: 'green'},
]

//sets how it should animate
const config = {mass: 1, tension: 280, friction: 120}


//component
const Slider = () => {
    const [index, set] = useState(0)
    const transition = useTransition(slides[index], item => item.id, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config,
    })

    useEffect(() => setInterval(() => set(state => (state + 1) % 4), 2000), [])

    return transition.map(({item, props, key}) => (
        <animated.div
            key={key}
            className="slider"
            /* used `` instead of '' made the linking work */
            style={{...props, backgroundColor: `${item.backgroundColor}` }}
        >
            <p>
                Hvaftrudner first portfolio prototype.
            </p>
        </animated.div>
    ))
}

export default Slider;