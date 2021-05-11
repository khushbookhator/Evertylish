import React from "react"
import {Switch, Route} from 'react-router-dom'
import {Home} from "./Home"
import {All} from "./All"
import {Type} from "./Type"
import {Collection} from "./Collection"
import {Rings} from "./Rings"

const Routes = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route path="/all" >
                    <All/>
                </Route>
                <Route path="/type">
                    <Type/>
                </Route>
                <Route path="/collection">
                    <Collection/>
                </Route>
                <Route path="/rings">
                    <Rings/>
                </Route>
                <Route>
                    <h3>Error: 404 Page Not Found</h3>
                </Route>
            </Switch>
        </>
    );
}

export {Routes}
