import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain1.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="tilt br2 shadow-2" style={{ height: '150px', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} scale={1.1} tiltMaxAngleX={20}
    tiltMaxAngleY={20}>
                <div className="pa4">
                    <img src={brain} alt="brain-logo" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;