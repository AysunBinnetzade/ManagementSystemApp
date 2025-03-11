import React from 'react';
import { Route, Routes } from 'react-router';
import { ROUTES } from './const';
import { PermissionRouter } from './PermissionRouter';
import { WorkerRouter } from './WorkerRouter';

import { CreateLoginWorker } from '../Form/CreateLoginWorker';

import { CreateNewPassword } from '../Form/CreateNewPassword';
import { CreatNewUser } from '../Form/CreateNewUser';


export const ROUTERS = () => {

    return (

        <Routes>
            <Route path={ROUTES.PATH} element = {
            <PermissionRouter> <>Hello World</> </PermissionRouter>
            }/>

<Route path={ROUTES.WORKER.LOGIN} element = {
            <WorkerRouter> {<CreateLoginWorker/>} </WorkerRouter>
            }/>

<Route path={ROUTES.WORKER.REGISTER} element = {
            <WorkerRouter> {<CreatNewUser/>} </WorkerRouter>
            }/>

<Route path={ROUTES.WORKER.PASSWORD} element = {
            <WorkerRouter> {<CreateNewPassword/>} </WorkerRouter>
            }/>


{/* <Route path={ROUTES.WORKER.REGISTER} element = {
            <WorkerRouter> <> Register</> </WorkerRouter>
            }/> */}

{/* <Route path={ROUTES.CreateLoginWorker} element = {
            <WorkerRouter> {<CreateLoginWorker/>}</WorkerRouter>
            }/> */}
{/* <Route path={ROUTES.CreateLoginWorker} element={<CreateLoginWorker/>}/> */}
        </Routes>
    )
}