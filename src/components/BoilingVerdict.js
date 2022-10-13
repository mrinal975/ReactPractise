export default function BoilingVerdict({celsius=0}){
    if(celsius>=100){
        return <p>The Water would be boil</p>
    }
    return <p>The Water would not boil</p>
}