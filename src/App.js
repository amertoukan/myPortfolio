import React, { Component } from 'react';
import './App.css';

import Main from './components/main';
import {Layout, Header,  Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    const sideNav = {
      color: 'white',
      fontSize : '1.5em',
      textDecoration: 'none'
    }
    return (
      <div>
      <Layout>
      <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Amer Toukan</Link>} scroll>
              <Navigation>
              <Link to="/aboutme" style = {{marginTop: 0, paddingTop: 0}}>About Me</Link>
              <Link to = "/projects">Projects</Link>
              <Link to = "/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer style = {{background: '#1D4350'}}title = {<Link className ='title'  style={{color: 'white', textDecoration: 'none', paddingBottom: 0, justifyContent: 'center'}}to="/">Amer Toukan</Link>}>
        <Navigation className = 'sidenav-color'>
        
            <Link to = "/aboutme" className = 'sidenav-content' style = {sideNav}>About Me</Link>
            <Link to = "/projects" className = 'sidenav-content' style = {sideNav}>Projects</Link>
            <Link to = "/contact" className = 'sidenav-content' style = {sideNav}>Contact</Link>
            
        </Navigation>
    </Drawer>
    <Main/>

    <Content />
</Layout>
</div>
    );
  }
}

export default App;
