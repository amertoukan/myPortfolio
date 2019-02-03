import React from 'react';
import budget1 from './img/budget1.png';
import {Grid} from 'react-mdl';
import Project from './project';

class Tab0 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>
<Grid>
     {/*Wather App*/}
     <Project
        image = "https://github.com/amertoukan/react-weather-app/raw/master/src/img/index.png"
        title = "Weather App"
        desc1 = "This weather app will show the temperature, humidity, high and low temperatures."
        techTools = "AJAX, ES6, React, UI/UX"
        github = "https://github.com/amertoukan/react-weather-app"
        live = "https://mysterious-badlands-22881.herokuapp.com/"
    />
     

     {/* Budget+ */}

     <Project
        image = {budget1}
        title = "Budget +"
        desc1 = "Displays user’s suggested monthly spending based on their income."
        techTools = "React, Node, Javascript, react-bootstrap, Mongoose, MongoDB"
        github = "https://github.com/anneventures/FinalProject"
        live = "https://agile-hollows-27414.herokuapp.com/"
    />
    </Grid>
     </div>
           
        )
    }
}

export default Tab0;