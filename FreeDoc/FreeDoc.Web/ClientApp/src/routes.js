import React from 'react';

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
        main: () => <Home/>,
    },
    {
        path: '/programming',
        exact: false,
        main: () => <Programming/>,
    },
    {
        path: '/graphic-design',
        exact: false,
        main: () => <GraphicDesign/>,
    },
    {
        path: '/english',
        exact: false,
        main: ({match}) => <English match={match}/>,
    },
    {
        path: '/software',
        exact: false,
        main: () => <Software/>,
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact/>,
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound/>,
    },
];

export default routes;