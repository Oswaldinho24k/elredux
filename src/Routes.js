import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {HomePage} from './components/home'
import {UsersPage} from './components/users'


export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/users" component={UsersPage}/>
    </Switch>
)