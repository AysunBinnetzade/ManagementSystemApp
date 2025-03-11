import React from "react";
import { Navigate } from "react-router";
import { ROUTES } from "./const";

export const PermissionRouter = ({ children }) =>{
    if (localStorage.getItem ("token")) {
        return children;
    }
    return <Navigate to={ROUTES.WORKER.LOGIN} replace />;
};