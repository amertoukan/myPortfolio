import React from 'react';
import Project from './project'
import {Grid} from 'react-mdl'
import '../App.css'

class Tab3 extends React.Component {
    render(){
        return (
            <div className ='projects-grid landing-bg' style ={{height:'100%'}}>
<Grid>
    {/*Bamazon*/}
    <Project
    image = "https://github.com/amertoukan/bamazon/raw/master/images/bamazonCustomer2.png"
    title = "Bamazon"
    desc1 = "Bamazon is a terminal store. It allows users to shop through the database."
    desc2 = "The app then prompts the user to select the product number and the quantity and displays the user their total."
    techTools = "Node, Inquirer, Nodemon, dotEnv"
    github = "https://github.com/amertoukan/bamazon"
/>

</Grid>
</div>
        )
    }
}

export default Tab3;