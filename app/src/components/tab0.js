import React from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import budget1 from './img/budget1.png';

class Tab0 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>
     {/*Card One */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/react-weather-app/raw/master/src/img/index.png")center/cover'}}>Weather App</CardTitle>
     <CardText>
     This weather app will show the temperature, humidity, high and low temperatures. 
     dev tools: AJAX, ES6, React, UI/UX
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


     {/*Card Two */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url('+budget1+')center/cover'}}> Budget+ </CardTitle>
     <CardText>
     <p>Displays user’s suggested monthly spending based on their income.</p>
  
     <hr/>
     <p> React, Node, Javascript, react-bootstrap, Mongoose, MongoDB</p>
     </CardText>
     <CardActions border>
     <a href = "https://github.com/amertoukan/burger">
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


     {/*Card Three */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: 'black', height: '176px', background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png")center/cover'}}> React Project #3</CardTitle>
     <CardText>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore recusandae adipisci officia, quas reprehenderit eligendi consequuntur ipsa enim dolore optio quisquam, doloribus deleniti placeat non. Obcaecati quis iure quas. Architecto itaque, praesentium reiciendis id consectetur pariatur, ea recusandae nihil illo nobis eius porro delectus.
     </CardText>
     <CardActions border>
     <Button colored>Github</Button>
     <Button colored>Live Demo</Button>
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