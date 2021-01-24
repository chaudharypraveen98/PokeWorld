import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";
import About from './components/About'
import PokemonApp from './components/PokemonApp'

function App() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/" component={PokemonApp} />
                </Switch>       
            </HashRouter>
        </div>
    )
}

export default App
