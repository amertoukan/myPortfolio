import React from 'react';
import Landing from './landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import {Route, Switch} from 'react-router-dom';

const Main = () => (
    <Switch>
    <Route exact path = "/" component = {Landing} />
    <Route exact path = "/aboutme" component = {AboutMe} />
    <Route exact path = "/contact" component = {Contact} />
    <Route exact path = "/projects" component = {Projects} />
    </Switch>
)

export default Main