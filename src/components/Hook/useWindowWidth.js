import { useEffect, useState } from "react";

const useWindowWidth =()=>{

    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize = ()=>{
        setOnSmallScreen(window.innerWidth < 768);
    }
    
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return () => window.removeEventListener('resize',checkScreenSize);
    },[])

    return onSmallScreen;
}

export default useWindowWidth;

