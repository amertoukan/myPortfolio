import React from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends React.Component {
render(){
    return (
        <Grid>
        <Cell col={8}>
        <h4 style = {{marginTop:'9px'}}>
        {this.props.schoolName}
        </h4>
        <h5>{this.props.program}</h5>
        <p>{this.props.schoolDescription}</p>
        </Cell>
    
        <Cell col ={4}>
       <p>{this.props.startYear} - {this.props.endYear}</p> 
        </Cell>
        </Grid>
    )
}
}

export default Education;