import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Tab0 from './tab0';
import Tab1 from './tab1';

class Projects extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           activeTab: 0
       };
   }

   toggleCategories = () => {
       if (this.state.activeTab === 0){
          return (
              <Tab0 />
          )
       } else if (this.state.activeTab === 1) {
         return <Tab1 />
       } else if (this.state.activeTab === 2) {
         return <div><h1>This is HTML/CSS</h1></div>
       }
   }
    render(){
        return(
   <div className ="category-tabs"> 
            <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState ({
                activeTab: tabId
            })} ripple>
          
                <Tab>React</Tab>
                <Tab>NodeJS</Tab>
                <Tab>JavaScript</Tab>
                </Tabs>
               
                <Grid>
                <Cell col={12}>
                <div className = "projects-content"> { this.toggleCategories() } </div>
                </Cell>
                </Grid>
              
            
   </div>
        )
    }
}

export default Projects;