import Summary from "../Summary";
import Analysis from "../Analysis";

export default function Result(){
    return (
        <div className="container">
            <Summary></Summary>
            <Analysis></Analysis>
        </div>
    );
}