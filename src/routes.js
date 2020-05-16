// import React, { Component } from 'react';

import Home from './views/Home';
import Programming from './views/Programming';
import GraphicDesign from './views/GraphicDesign';
import English from './views/English';
import Software from './views/Software';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/programming',
        exact: false,
        component: Programming,
    },
    {
        path: '/graphicDesign',
        exact: false,
        component: GraphicDesign,
    },
    {
        path: '/English',
        exact: false,
        component: English,
    },
    {
        path: '/software',
        exact: false,
        component: Software,
    },
    {
        path: '/contact',
        exact: false,
        component: Contact,
    },
    {
        path: '',
        exact: false,
        component: NotFound,
    }
];

export default routes;