import React from 'react';

import './Info.css';

export class Info extends React.Component {

    /*constructor(props){
        super(props);
    } */
    
    

    render(){
        
        return (
            
            <div  className="info">
                <div className="info-header"> Hej</div>
                <div className="info-headline">tja tja tja</div>
                <div className="info-text">
                    <div>
                        <h3>tjenare</h3>
                        
                            hejsan tjo tjo gott de ska bli med kaffe och fika och 
                            vem är det som har baka di här bullorna

                        
                    </div>
                </div>
                <div className="info-links">
                
                    <div className="logo1" placeholder="facebook">facebook</div>
                    <div className="logo1" placeholder="instagram">instagram</div>
                    <div className="logo1" placeholder="github">github</div>
                    <div className="logo1" placeholder="linkedin">linkedin</div>

                </div>
                <div className="info-footer"> 
                    RingMig@hvaftrudner.com
                </div>
            </div>
            
        )
    }

}

export default Info;