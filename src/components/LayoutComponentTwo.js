import useWindowWidth from "./Hook/useWindowWidth";

export default function LayoutComponentTwo(){
    
    const onSmallScreen = useWindowWidth();

    return (
        <div className={onSmallScreen? 'small' : 'large' }>
            <h1>Your are browsing on  device</h1>
        </div>
    );
}