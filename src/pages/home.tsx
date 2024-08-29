import React, {Fragment} from 'react';
import { Creators } from '../components/Creators.tsx'
import {Link} from "react-router-dom";
import { Addcreator } from '../pages/addcreator.tsx'
export function Home(props) {

    return(

        <Fragment>
            <Link to="/" component="<Home />">All Creators </Link>
            <Link to="/addcreator" component="<Addcreator />">Add Creator</Link>
                <Creators>

                </Creators>
        </Fragment>
    );
}