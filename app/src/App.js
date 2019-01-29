import React, { Component } from 'react';
import './App.css';

import Main from './components/main';
import {Layout, Header,  Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
      <Layout fixedHeader>
          <Header className = 'header-color' title={<span><span style={{ color: '#ddd' }}></span><strong>Amer Toukan</strong></span>}>
              <Navigation>
              <Link to="/">Home</Link>
              <Link to = "/resume">Resume</Link>
              <Link to = "/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
        <Navigation>
            <Link to="/">Home</Link>
            <Link to = "/aboutme">About Me</Link>
            <Link to = "/resume">Resume</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/projects">Projects</Link>
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
