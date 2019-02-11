import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import '../App.css';
import background from './img/Toronto.jpg'

class Contact extends React.Component{
    render(){
        return(
        <div className = 'contact-body clearfix' style = {{background:'url('+background+') center/cover', height: '100%'}}>
        <Grid className = 'contact-grid clearfix'>
        
<Cell col = {6}>
<div className = 'contact-left'>
<h2>Amer Toukan</h2>
  <img 
    src = "https://media.licdn.com/dms/image/C5103AQGlPYpoRCnuQQ/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=Pa6cp80Rit6_CtY8CLvs9gMZkXHmkflqetO6arFNN5I"
    alt = "avatar"
    style = {{height: '250px'}}/>
</div>
            
</Cell>

 

<Cell col = {6}>
   <h2>Contact Me</h2>     
   <hr/>

<List>

<div className = 'contact-list-box clearfix'>
<div className = 'contact-list'>
    
    <ListItem>
     <ListItemContent style = {{fontSize : '20px', fontFamily: 'Sarabun'}}
     >
            <i className = 'fa fa-phone' aria-hidden = 'true'/>
     (647) 285-9362
     </ListItemContent>
    </ListItem>
   
    <ListItem>
    <ListItemContent style = {{fontSize : '20px', fontFamily: 'Sarabun'}}
    >
           <i className = 'fa fa-envelope' aria-hidden = 'true'/>
    toukan.amer@gmail.com
    </ListItemContent>
   </ListItem>

   <ListItem>
     <ListItemContent style = {{fontSize : '20px', fontFamily: 'Sarabun'}}
     >
            <i className = 'fa fa-instagram' aria-hidden = 'true'/>
     @amertoukan
     </ListItemContent>
     
    </ListItem>
    </div>
    </div>
</List>

        
</Cell>

        </Grid>
        
        </div>
       
        )
    }
}

export default Contact;