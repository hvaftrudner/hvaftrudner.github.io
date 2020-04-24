import './NeonBar.css';
import React, {useState, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';

const sign = [
    {id: 0, text: 'hallå där'},
    {id: 1, text: 'hejsan svejsan'},
    {id: 2, text: 'välkommen!'},
    {id: 3, text: 'tjo å tjimm'}
]

const config = {mass: 20, tension: 400, friction: 200}


const NeonBar = () => {
    const [index, set] = useState(0)
    const transition = useTransition(sign[index], item => item.id, {
        from: {opacity: 0, textShadow: '0 0 10px #ff4da6',
        boxShadow: '0px 0px 5px #e60073, 0 0 5px #ff4da6 inset'},
        enter: {opacity: 1, textShadow: '0 0 20px #ff4da6', color: 'white',
        boxShadow: '0px 0px 30px #e60073, 0 0 30px #ff4da6 inset'},
        leave: {opacity: 0, textShadow: '0 0 20px #ff4da6',
        boxShadow: '0px 0px 5px #e60073, 0 0 5px #ff4da6 inset'},
        config,
    })

    useEffect(() => setInterval(() => set(state => (state + 1) % 4), 1000), [])
    //projects visar hur man lägger in olika text i rend
    return transition.map(({item, props, key, ...rest}) => (
        <animated.div
        key={sign[index]}
        className="neonsign"
        style={{...props, ...rest }}
        >
         TJENIS
        </animated.div>
    ))

}
/*
//Merge with slider.js to create neon signs
const divstyle = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

const NeonBar = () => {
    return <div className="neonsign"
                style={divstyle}>hellu</div>
} */

export default NeonBar;