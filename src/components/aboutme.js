import React from 'react';
import '../App.css';
import {Grid, Cell} from 'react-mdl';
import Title from './title';
import Description from './description';
import Education from './education'
import Skills from './skills';

class AboutMe extends React.Component{
    render(){
        
        return(
            <div className = 'landing-bg' style = {{height:'100%'}}>
            <Grid>
                <Cell className = 'about-left-col' col = {4}> 
                    <div style = {{
                        textAlign: 'center'
                    }}> 
                        <img 
                    src= "https://media.licdn.com/dms/image/C5103AQGlPYpoRCnuQQ/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=Pa6cp80Rit6_CtY8CLvs9gMZkXHmkflqetO6arFNN5I"
                    alt = "avatar"
                    style = {{
                        height: '250px'
                    }}
                    />
                    </div>
                    <h2 style ={{paddintTop:"2em", color:"whitesmoke"}}>Amer Toukan</h2>
                    <h4 style = {{color: 'white'}}> Full-Stack Web Developer</h4>
                    <hr style = {{borderTop: '3px solid #F56217' , width: '50%'}}/>
                    
                    <Title className ='skills-header' 
                    title = "Hobbies"/>
                    
                    <Skills 
                    skill = "Developing"
                    progress = {50}
                    />

                    <Skills 
                    skill = "Reading"
                    progress = {30}
                    />
                    <Skills 
                    skill = "Gaming"
                    progress = {10}
                    />
                    <Skills 
                    skill = "Soccer"
                    progress = {10}
                    />


                    </Cell>


                <Cell className = 'about-right-col' style = {{backgroundSize: '100% 100%'}}col = {8}> 
                    <h1>About Me</h1>
                    <hr style = {{borderTop: '3px solid #49a09d'}} />

                    {/*Summary*/}
                   <Title 
                   title = "Summary"
                   />
                    <hr style = {{borderTop: '4px dotted #5f2c82', width: '50%'}} />

                   <Description 
                   line1 = "Full Stack Web Developer using MongoDB, Express, React, Node.js(MERN). Experienced in building CRUD applications, RESTful APIs using Node.js and express."
                   line2 = "Common libraries of use: Mongoose, Express, body-parse, react-router."
                   line3 = "Common use of UI libraries: Bootstrap 4, MaterializeCSS, React-MDL"
                    />
<hr />
                    {/*Education*/}
                    <Title 
                    title = "Education"
                    />
                    <hr style = {{borderTop: '4px dotted #5f2c82', width: '50%'}} />

                    <Education 
                    schoolName = "University of Toronto"
                    program = "Coding BootCamp – JavaScript Full Stack Web Development"
                    schoolDescription = "An intensive boot camp dedicated to designing and building web applications."
                    startYear = "May 2018"
                    endYear = "Nov 2018"
                    />


                    <Education 
                    schoolName = "Ryerson University"
                    program = "Business Technology Management"
                    schoolDescription = "Foundations of Info Systems, Global Management, Microeconomics, Computer-Enabled Prob.Solving, Critical Thinking, Business Statistics, Organizational Behaviour."
                    startYear = "Sept 2015"
                    endYear = "Jan 2018"
                    />
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default AboutMe;