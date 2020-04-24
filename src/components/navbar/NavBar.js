import React from 'react';
import './NavBar.css';
import Info from '../info/Info';
/*import {useSpring, animated} from 'react-spring'; */

import DropBar from '../dropbar/DropBar';
import Projects from '../projects/Projects';
import NeonLogin from '../neonLogin/neonLogin';

export class NavBar extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            isToggleOn: false,
            isToggleOnDropBar: false,
            isToggleOnProjects: false,
            isToggleLogin: false
        };

        this.renderInfo = this.renderInfo.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        this.toggleClickDropBar = this.toggleClickDropBar.bind(this);
        this.toggleClickProjects = this.toggleClickProjects.bind(this);
        this.toggleClickLogin = this.toggleClickLogin.bind(this);
        
    }

    renderInfo(){
        return (
            <div className="render-info">Info</div>
        )
    }

    toggleClick(){
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            isToggleOnDropBar: false,
            isToggleOnProjects: false,
        });
    }
    
    toggleClickDropBar(){
        this.setState({
            isToggleOnDropBar: !this.state.isToggleOnDropBar,
            isToggleOn: false,
            isToggleOnProjects: false,
        });
    }

    toggleClickProjects(){
        this.setState({
            isToggleOnProjects: !this.state.isToggleOnProjects,
            isToggleOn: false,
            isToggleOnDropBar: false
        })
    }

    toggleClickLogin(){
        this.setState({
            isToggleOnProjects: false,
            isToggleOn: false,
            isToggleOnDropBar: false,
            isToggleLogin: !this.state.isToggleLogin
        })
    }


    render(){
        return (
            <div>
                
                <div className="firstDiv" >
                    <p>Kuken</p>
                    <div className="flexbox1" onClick={this.toggleClick}>
                        <h3>About me</h3>
                        
                    </div>
                    
                    <div className="flexbox1" onClick={this.toggleClickDropBar}>
                        <h3>CV</h3>
                    </div>
                    
                    <div className="flexbox1" onClick={this.toggleClickProjects}>
                        
                        <h3>projects</h3>
                        
                    </div>
                    
                    
                    <div className="flexbox1"><h3>capability</h3></div>
                    <div className="flexbox1"><h3>private</h3></div>
                    
                    <div className="flexbox1" onClick={this.toggleClickLogin}>
                        <h3>login</h3>
                    </div>

                    {this.state.isToggleOn ? <Info /> : null}
                    {this.state.isToggleOnDropBar ? <DropBar /> : null}
                    {this.state.isToggleLogin ? <NeonLogin /> : null}
                    
                </div>
                
                <div className="navBar-renderbox">
                    {this.state.isToggleOnProjects ? <Projects /> : null}
                </div>
                
            </div>
        )
    }

}

export default NavBar;