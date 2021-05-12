import React from "react"
import {Switch, Route} from 'react-router-dom'
import {Home} from "./Home"
import {All} from "./All"
import {Type} from "./Type"
import {Collection} from "./Collection"
import {Rings} from "./Rings"
import { Individual } from "../Components/Items/Individual"
import { Cart } from "../Components/Tabs/Cart"
import { Earrings } from "./Earrings"
import { Bracelet } from "./Bracelet"
import { Neckpiece } from "./Neckpiece"

const Routes = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/all" >
                    <All/>
                </Route>
                <Route exact path="/type">
                    <Type/>
                </Route>
                <Route exact path="/collection">
                    <Collection/>
                </Route>
                <Route exact path="/rings">
                    <Rings/>
                </Route>
                <Route exact path="/earrings">
                    <Earrings/>
                </Route>
                <Route exact path="/bracelet">
                    <Bracelet/>
                </Route>
                <Route exact path="/neckpiece">
                    <Neckpiece/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route exact path="/rings/:id">
                    <Individual/>
                </Route>
                <Route>
                    <h3>Error: 404 Page Not Found</h3>
                </Route>
            </Switch>
        </>
    )
}

export {Routes}
