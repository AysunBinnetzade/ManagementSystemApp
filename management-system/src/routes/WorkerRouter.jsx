import React from "react";
import { Navigate } from "react-router";
import { ROUTES } from "./const";

export const WorkerRouter = ({ children }) =>{
    if (!localStorage.getItem ("token")) {
        return children;
    }
    return <Navigate to={ROUTES.PATH} replace />;
};