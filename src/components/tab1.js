import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../App.css';

class Tab1 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>

     {/*Eat-Da-Burger */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/burger/raw/master/images/screenshot-1.png")center/cover'}}></CardTitle>
     <CardText>
     <p>This app has 2 lists -- one which shows burgers to devour while the other shows devoured burgers -- and a text-field to enter the burger the user is craving.</p>
     <p> New burgers will be automatically placed under burgers to eat.</p>
     <hr/>
     <p>NodeJS, Express Handlebars, Javascript, ORM, mySQL.</p>
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


     {/*Trivia Game */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/triviaGame/raw/master/img/trivia.png")center/cover'}}>Trivia Game</CardTitle>
     <CardText>
     <p>10 Trivia Questions to answer, after selecting the answer, a gif is displayed with the correct answer.</p>
     <p>The app will inform the user if the answer is correct, incorrect, or if the time is up.</p>
     <hr/>
     <p>NodeJS, Express Handlebars, Javascript, ORM, mySQL.</p>
     </CardText>
     <CardActions border>
     <a href = "https://github.com/amertoukan/triviaGame">
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

{/*Train Scheduler*/}
<Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
<CardTitle style = {{color: 'black', height: '176px', background: 'url("https://github.com/amertoukan/trainSchedule/raw/master/img/screenshot.png")center/cover'}}> TrainSchedule</CardTitle>
<CardText>
<p>A train schedule application that incorporates Firebase to host arrival and departure data. Information is retrieved and manipulated with Moment.js.</p>
<p>This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.</p>
<hr />
<p>Javascript, MomentJS, jQuery, Firebase, Google Fonts</p>
</CardText>
<CardActions border>
<a href = "https://github.com/amertoukan/trainSchedule">
<Button colored>Github</Button>
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

export default Tab1;