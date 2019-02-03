import React from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';
import Title from './title';


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