import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Principal from '../containers/Principal'

const Main = () => (

    <main>
        <Switch>
            <Route exact path='/' component={Principal}/>
        </Switch>
    </main>
);

export default Main