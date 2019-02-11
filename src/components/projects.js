import React from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import './reset.css';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

class Projects extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           activeTab: 0
       };
   }

   toggleCategories = () => {
       if (this.state.activeTab === 0) {
         return <Tab1 />
       } else if (this.state.activeTab === 1) {
         return <Tab2 />
       }else if (this.state.activeTab === 2) {
        return <Tab3 />
      }
   } 
    render(){
        return(
   <div className ="category-tabs landing-bg" style = {{height: '100%'}}> 
            <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState ({
                activeTab: tabId
            })} ripple>
          
            
                <Tab className = "project-tab" style ={{color:'white'}}>JavaScript</Tab>
                <Tab className = "project-tab" style ={{color:'white'}}>React</Tab>
                <Tab className = "project-tab" style ={{color:'white'}}>Node</Tab>
                </Tabs>
               
                <Grid>
                <Cell col={12}>
                <div className = "projects-content landing-bg" style = {{height: '100%'}}> { this.toggleCategories() } </div>
                </Cell>
                </Grid>
              
            
   </div>
        )
    }
}

export default Projects;