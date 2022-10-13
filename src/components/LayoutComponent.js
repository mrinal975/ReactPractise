import useWindowWidth from "./Hook/useWindowWidth";

export default function LayoutComponent(){
    
    const onSmallScreen = useWindowWidth();
    return (
        <div>
            <h1>Your are browsing on {onSmallScreen? 'small' : 'large' } device</h1>
        </div>
    );
}