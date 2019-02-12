import React from 'react';
import budget1 from './img/budget1.png';
import calculator from './img/calculator.png';
import {Grid} from 'react-mdl';
import Project from './project';
import './reset.css';

class Tab2 extends React.Component{
    render(){
        return (
    <div className ='projects-grid landing bg' style = {{height:'100%'}}>
<Grid>

{/*Weather App*/}
     <Project
        image = "https://github.com/amertoukan/react-weather-app/raw/master/src/img/index.png"
        title = "Weather App"
        desc1 = "This weather app will show the temperature, humidity, high and low temperatures."
        techTools = "AJAX, ES6, React, UI/UX"
        github = "https://github.com/amertoukan/react-weather-app"
        live = "https://mysterious-badlands-22881.herokuapp.com/"
    />
     
 {/*React-ChatBot*/}
 <Project className ='black-text'
 image = "https://github.com/amertoukan/react-chatbot/blob/master/img/hotel.png?raw=true"
 title = "React-Chatbot"
 desc1 = "An introduction to AWS by building react chatbot."
 desc2 = "It allows users to book a hotel or rent a car."
 techTools = "AWS Lambda, AWS Amplify, AWS Lex, react, express, body-parser.;"
 github = "https://github.com/amertoukan/react-chatbot"
 live = "https://afternoon-wave-20821.herokuapp.com/"
 />
   
</Grid>


<Grid>
  {/* Budget+ */}

  <Project
  image = {budget1}
  title = "Budget +"
  desc1 = "Displays user’s suggested monthly spending based on their income."
  techTools = "React, Node, Javascript, react-bootstrap, Mongoose, MongoDB"
  github = "https://github.com/anneventures/FinalProject"
  live = "https://agile-hollows-27414.herokuapp.com/"
/>


{/*Calculator*/}
<Project
  image = {calculator}
  title = "Calculator"
  desc1 = "A basic calculator."
  desc2 = "Heroku is not deployed as it keeps on returning status 500."
  techTools = "create-react-app, flexbox, npm, node, mathjs, express, path, heroku"
  github = "https://github.com/amertoukan/react-calculator/blob/master/img/calculator.png?raw=true"
  live = "https://nameless-falls-30193.herokuapp.com/"
/>
    </Grid>

     </div>
           
        )
    }
}

export default Tab2;