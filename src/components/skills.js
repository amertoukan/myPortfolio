import React from 'react';
import {ProgressBar} from 'react-mdl';



class Skills extends React.Component {
    render(){
        return (
            <div>
            
                
            
                <p style = {{fontSize: '20px'}}>{this.props.skill}</p>
                <ProgressBar progress = {this.props.progress}/>
<br/>
             
            </div>
        )
    }
}

export default Skills;