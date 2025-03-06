import React from 'react'
import { Route, Router } from 'react-router'
import { ROUTES } from './const'

export const ROUTERS = () => {

    return (

        <Router>
            <Route path={ROUTES.PATH} element = {()=> <>Hello World</>} />
            <Route path={ROUTES.WORKER.LOGIN} element = {()=> <>Login</>} />
            <Route path={ROUTES.WORKER.REGISTER} element = {()=> <>Register</>} />


        </Router>
    )
}