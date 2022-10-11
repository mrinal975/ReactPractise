import React from "react";
export default class Form extends React.Component{
    state = {
        title :'Javascript',
        text: 'text area',
        library : 'Vue',
        isAwesome :true

    };
    handleChange =(e)=>{
        // console.log(e.target.value, e.target.type);
        if(e.target.type==='text'){
            this.setState({
                title : e.target.value,
            });
        }else if(e.target.type=='textarea'){
            this.setState({
                text : e.target.value,
            });
        }
        else if(e.target.type=='select'){
            this.setState({
                library : e.target.value,
            });
        }
        else if(e.target.type=='checkbox'){
            this.setState({
                isAwesome : e.target.checked,
            });
        }
    }

    render(){
        const {title, text, library, isAwesome} = this.state;
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter title"
                    value={title} onChange= {this.handleChange}/>
                    <p>{title}</p>
                    <br/>
                    <br/>    
                    <textarea name="text" value={text}
                    onChange={this.handleChange} />
                    <br/>
                    <br/>  
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br/>
                    <br/> 
                    <input type="checkbox" checked={isAwesome} 
                        onChange={this.handleChange}/>
                </form>
                
            </div>
        );
    }
}