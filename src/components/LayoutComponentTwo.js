import { useEffect, useState } from "react";

export default function LayoutComponentTwo(){
    
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize = ()=>{
        setOnSmallScreen(window.innerWidth < 768);
    }

    useEffect(()=>{
        console.log('hi  ---');
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        console.log('hi 2  ---');
        return () => window.removeEventListener('resize',checkScreenSize);
    },[])

    return (
        <div className={onSmallScreen? 'small' : 'large' }>
            <h1>Your are browsing on  device</h1>
        </div>
    );
}