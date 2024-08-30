import React from 'react';
import { Creators } from './components/Creators.tsx'
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { Home } from './pages/home.tsx'
import { Addcreator } from './pages/addcreator.tsx'
import { Creatorpage } from './pages/creatorpage.tsx'
import { Updatecreator } from "./pages/updatecreator.tsx";



export function Todo(props) {


    return (
        <Router>
            <Routes>
                <Route path="/creatorpage/:primaryKey" element={<Creatorpage />} />
                <Route path="/" element={<Home />} />
                <Route path="/addcreator" element={<Addcreator />} />
                <Route path="/updatecreator/:primaryKey" element={<Updatecreator />} />
            </Routes>
        </Router>

    );
}
