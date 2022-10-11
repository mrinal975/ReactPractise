import WithCounter from "./HOC/WithCounter";
const HoverCounter = (props)=>{
    const { count, incrementCount}  = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>
                Clicked {count} times
            </h1>
        </div>
    );
}
export default WithCounter(HoverCounter);