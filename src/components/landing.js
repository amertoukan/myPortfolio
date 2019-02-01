import React from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends React.Component{
    render(){
        return(
            <div style = {{width: '100%', margin:'auto'}}>
                <Grid className = "landing-grid">
                <Cell col={12}>
                <img 
                src = "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt = "avatar"
                className = "avatar-img"
                />

                <div className = "banner-text">
                <h1>Full-Stack Web Developer</h1>
                <hr/>

                <p> AJAX | REST | React | jQuery | JavaScript | Bootstrap | NodeJS | MongoDB | MySQL</p>
         
                <div className = "social-links">
        
            {/* LinkedIn  */}
            <a href = "https://www.linkedin.com/in/amer-t-51055358/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"/>
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