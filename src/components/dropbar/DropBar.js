import React from 'react';
import './DropBar.css';
import {useSpring, animated} from 'react-spring';

function DropBar(){
    const props = useSpring({config: {duration: 2000}, opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={props}>
            <div className="try">
                <p>
                    First try for animated box
                </p>
                <p>
                    tja tja vem har baka di här bullorna
                </p>
                <a  className="box"
                    href="https://google.com" 
                    target="_blank"
                    rel="noopener noreferrer">tja</a>

                <div className="box">hej</div>
                <div className="box">ola</div>
                <div className="box">tjo</div>

            </div>
        </animated.div>
    )
}

export default DropBar;
