const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

export default function TemperateInput({temperature, scale, onTemperatureChange})
{
    return(
        <fieldset>
            <legend>Enter Temperate in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} 
            onChange={onTemperatureChange}>
            </input>
        </fieldset>
    );
   
}