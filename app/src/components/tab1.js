import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../App.css'
class Tab1 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>
     {/*Card One */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/burger/raw/master/images/screenshot-1.png")center/cover'}}></CardTitle>
     <CardText>
     <p>This app has 2 lists -- one which shows burgers to devour while the other shows devoured burgers -- and a text-field to enter the burger the user is craving.</p>
     <p> New burgers will be automatically placed under burgers to eat.</p>
     <hr/>
     <p>NodeJS, Express Handlebars, Javascript, ORM, mySQL.</p>
     </CardText>
     <CardActions border>
     <a href = "https://github.com/anneventures/FinalProject">
     <Button colored>Github</Button>
     </a>
    <a href = "https://polar-chamber-37107.herokuapp.com/">
    <Button colored>Live Demo</Button>
    </a>
     
     </CardActions>
     <CardMenu style ={{color:'fff'}}>
     <IconButton name='share'/>
     </CardMenu>
     </Card>


     {/*Card Two */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: 'black', height: '176px', background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png")center/cover'}}> JS Project #2</CardTitle>
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


     {/*Card Three */}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: 'black', height: '176px', background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png")center/cover'}}> JS Project #3</CardTitle>
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

export default Tab1;