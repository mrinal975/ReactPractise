import useWindowWidth from "./Hook/useWindowWidth";

export default function LayoutComponentTwo(){
    
    const onSmallScreen = useWindowWidth(600);

    return (
        <div className={onSmallScreen? 'small' : 'large' }>
            <h1>Your are browsing on  device</h1>
        </div>
    );
}