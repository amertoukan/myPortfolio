import React, { Component } from 'react';
import './App.css';

import Main from './components/main';
import {Layout, Header,  Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
      <Layout>
      <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Amer Toukan</Link>} scroll>
              <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to = "/projects">Projects</Link>
              <Link to = "/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Amer T.</Link>}>
        <Navigation>
    
            <Link to = "/aboutme">About Me</Link>
            <Link to = "/projects">Projects</Link>
            <Link to = "/contact">Contact</Link>
            
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
