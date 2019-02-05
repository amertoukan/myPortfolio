import React from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends React.Component{
    render(){
       
        return(
            <div className = 'landing-bg' style = {{height:'100%'}}>
                <Grid className = "landing-grid">
                <Cell col={12}>
                <img 
                src = "https://media.licdn.com/dms/image/C5103AQGlPYpoRCnuQQ/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=Pa6cp80Rit6_CtY8CLvs9gMZkXHmkflqetO6arFNN5I"
                alt = "avatar"
                className = "avatar-img"
                />

                <div className = "banner-text">
                <h1>Full-Stack Web Developer</h1>
                <hr/>

                <p> AJAX | REST | React | jQuery | JavaScript | Bootstrap | NodeJS | MongoDB | MySQL</p>
         
                <div className = "social-links">    
        
            {/* LinkedIn  */}
            <a href = "http://www.linkedin.com/in/amer-t-51055358/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square mdl-layout-icon" aria-hidden="true"/>
            </a>

            {/* Github  */}
            <a href ="https://github.com/amertoukan" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github" aria-hidden="true"/>
            </a>
            </div>
                </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;