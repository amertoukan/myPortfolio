import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import '../App.css';
import background from './img/Toronto.jpg'

class Contact extends React.Component{
    render(){
        return(
        <div className = 'contact-body' style = {{background:'url('+background+') center/cover'}}>
        <Grid className = 'contact-grid'>
        
<Cell col = {6} style ={{opacity : '1'}}>

  <h2>Amer Toukan</h2>
  <img 
    src = "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
    alt = "avatar"
    style = {{height: '250px'}}
  />

  

            
</Cell>

 

<Cell col = {6}>
   <h2>Contact Me</h2>     
   <hr/>

<List>

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
</List>

        
</Cell>
    
        </Grid>
        
        </div>
       
        )
    }
}

export default Contact;