import React from 'react';
import '../App.css';
import {Grid} from 'react-mdl';
import Project from './project';
class Tab1 extends React.Component{
    render(){
        return (
    <div className ='projects-grid'>

     <Grid>

     {/*Eat-Da-Burger */}
    <Project
        image = "https://github.com/amertoukan/burger/raw/master/images/screenshot-1.png"
        title = "Eat-Da-Burger"
        desc1 = "This app has 2 lists -- one which shows burgers to devour while the other shows devoured burgers -- and a text-field to enter the burger the user is craving."
        desc2 = "New burgers will be automatically placed under burgers to eat."
        techTools = "NodeJS, Express Handlebars, Javascript, ORM, mySQL."
        github = "https://github.com/amertoukan/burger"
        live = "https://agile-hollows-27414.herokuapp.com/"
    />
    


{/*Trivia Game */}
<Project
    image = "https://github.com/amertoukan/triviaGame/raw/master/img/trivia.png"
    title = "Trivia Game"
    desc1 = "10 Trivia Questions to answer, after selecting the answer, a gif is displayed with the correct answer."
    desc2 = "The app will inform the user if the answer is correct, incorrect, or if the time is up."
    techTools = "NodeJS, Express Handlebars, Javascript, ORM, mySQL."
    github = "https://github.com/amertoukan/triviaGame"
    live = "https://agile-hollows-27414.herokuapp.com/"
/>
</Grid>


{/*FriendFinder*/}
<Grid>
<Project 
    image = "https://github.com/amertoukan/friendFinder/raw/master/img/friendfinder.png"
    title = "Friend Finder"
    desc1 = "This full-stack site will take in results from your users' surveys, then compare their answers with those from other users."
    desc2 = "The app will then display the name and picture of the user with the best overall match."
    techTools = "body-parser, dotenv, express, http"
    github = "https://github.com/amertoukan/friendFinder"
    live = "https://friendfinder-amertoukan.herokuapp.com/"
/>


{/*Train Scheduler*/}
<Project
    image = "https://github.com/amertoukan/trainSchedule/raw/master/img/screenshot.png"
    title = "Train Schedule"
    desc1 = "A train schedule application that incorporates Firebase to host arrival and departure data. Information is retrieved and manipulated with Moment.js."
    desc2 = "This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station."
    techTools = "Javascript, MomentJS, jQuery, Firebase, Google Fonts"
    github = "https://github.com/amertoukan/trainSchedule"
   
/>
</Grid>
</div>
           
        )
    }
}

export default Tab1;