import React, {Component} from 'react';
import {Cell,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../App.css';

class Project extends Component {
    render(){
        
        return (
<div>
    <Cell col = {4}>
    
    <Card shadow = {4} style = {{minWidth: '450', margin : 'auto'}}>
    
    <CardTitle style = {{color: '#fff', height: '176px', background: `url(${this.props.image})center/cover`}}>{this.props.title}</CardTitle>
    
    <CardText>
     
    <p>{this.props.desc1}</p>
     
    {this.props.desc2 != null && <p>{this.props.desc2}</p>}
     
    <hr/>
     
    <p>{this.props.techTools}</p>
     
    </CardText>
     
    <CardActions border>
     
    <a href ={this.props.github} rel = "noopener noreferrer" target="_blank">
     <Button colored>Github</Button>
     </a>
    {this.props.live != null && <a href ={this.props.live}  rel = "noopener noreferrer" target = "_blank">
    <Button colored>Live Demo</Button>
     </a>}
     </CardActions>
     <CardMenu style ={{color:'fff'}}>
     <IconButton name='share'/>
     </CardMenu>
     </Card>
            </Cell>
            
            </div>
        )
    }
}


export default Project;