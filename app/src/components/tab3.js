import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import '../App.css'

class Tab2 extends React.Component {
    render(){
        return (
            <div className ='projects-grid'>

    {/*Bamazon*/}
     <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
     <CardTitle style = {{color: '#fff', height: '176px', background: 'url("https://github.com/amertoukan/bamazon/raw/master/images/bamazonCustomer2.png")center/cover'}}>Bamazon</CardTitle>
     <CardText>
     <p>Bamazon is a terminal store. It allows users to shop through the database. </p>
     <p>The app then prompts the user to select the product number and the quantity and displays the user their total</p>
     <hr/>
     Node, Inquirer, Nodemon, dotEnv
     </CardText>
     <CardActions border>
     <a href = "https://github.com/amertoukan/bamazon">
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

export default Tab2;