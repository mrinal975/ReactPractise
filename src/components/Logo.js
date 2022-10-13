import { useState } from 'react';
import styles from './assets/css/Logo.module.css';

export default function Logo(){
    const [glassColor, setGlassColor] = useState('black');

    const pickColorRandomly = ()=>{
        const colors = ['red','green', 'yellow', 'blue', 'orange'];
        const color = colors[Math.floor(Math.random()*colors.length)];
        return color;
    };

    return (
        <div className="logo">
            <div className="hair">
                <p>Hair on there</p>
            </div>
            <div className={styles.glasses}>
                <p style={{color:glassColor}}>Glasses on there</p>
            </div>
            <div className="play">
                <button type="button" onClick={()=>setGlassColor(pickColorRandomly())}>Colorize Glass</button>
                <button type="button" onClick={()=>setGlassColor('blue')}>Reset Glass</button>
            </div>
        </div>
    );
}