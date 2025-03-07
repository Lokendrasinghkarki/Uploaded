import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './Components/Username.js';
import Password from './Components/Password.js';
import Register from './Components/Register.js';
import Profile from './Components/Profile.js';
import Recovery from './Components/Recovery.js';
import Reset from './Components/Reset.js';
import PageNotFound from './Components/PageNotFound.js';
import Home from './Components/Home.js';
import Features from './Components/home-components/Route-features.js';
import Highlights from './Components/home-components/Route-highlights.js';
import Testimonials from './Components/home-components/Route-testimonials.js';
import FAQ from './Components/home-components/Route-FAQ.js';
import Pricing from './Components/home-components/Route-pricing.js';




/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/features',
        element: <Features></Features>
    },
    {
        path: '/highlights',
        element: <Highlights></Highlights>
    },
    {
        path: '/testimonials',
        element: <Testimonials></Testimonials>
    },
    {
        path: '/faq',
        element: <FAQ></FAQ>
    },
    {
        path: '/pricing',
        element: <Pricing></Pricing>
    },
    {
        path: '/home',
        element: <AuthorizeUser><Home /></AuthorizeUser>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/password',
        element: <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path: '/profile',
        element: <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])



export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    )
}
