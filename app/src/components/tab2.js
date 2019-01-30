import React from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import budget1 from './img/budget1.png';

class Tab0 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>

     {/*Wather App*/}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/react-weather-app/raw/master/src/img/index.png")center/cover'}}>Weather App</CardTitle>
     <CardText>
     <p>This weather app will show the temperature, humidity, high and low temperatures.</p> 
     <hr />    
     <p>AJAX, ES6, React, UI/UX</p>
     </CardText>
     <CardActions border>
     <a href = "https://github.com/amertoukan/react-weather-app">
     <Button colored>Github</Button>
     </a>
    <a href = "https://mysterious-badlands-22881.herokuapp.com/">
    <Button colored>Live Demo</Button>
    </a>
     </CardActions>
     <CardMenu style ={{color:'fff'}}>
     </CardMenu>
     </Card>


     {/* Budget+ */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url('+budget1+')center/cover'}}> Budget+ </CardTitle>
     <CardText>
     <p>Displays user’s suggested monthly spending based on their income.</p>
  
     <hr/>
     <p> React, Node, Javascript, react-bootstrap, Mongoose, MongoDB</p>
     </CardText>
     <CardActions border>
     <a href = "https://github.com/anneventures/FinalProject">
     <Button colored>Github</Button>
     </a>
    <a href = "https://agile-hollows-27414.herokuapp.com/">
    <Button colored>Live Demo</Button>
    </a>
     
     </CardActions>
     <CardMenu style ={{color:'fff'}}>
     <IconButton name='share'/>
     </CardMenu>
     </Card>

    
    </div>
           
        )
    }
}

export default Tab0;