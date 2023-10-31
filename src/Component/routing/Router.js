import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import DummyTable from "./tabs/dummyTable";
import DummyList from "./tabs/dummyList";
import DummyChart from "./tabs/dummyChart";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import GetTabs from "../Hooks/GetTabs";
import Dummy from "./Dummy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <DummyList/>,
                index: true,
                loader: GetTabs,

            },
            {
                path: "/dummyList",
                element: <DummyList/>,
                loader: GetTabs,
            },
            {
                path: "/dummyTable",
                element: <DummyTable/>,
                loader: GetTabs,
            },
            {
                path: "/dummyChart",
                element: <DummyChart/>,
                loader: GetTabs,
            }           
        ]
    },  
]);

export default router;