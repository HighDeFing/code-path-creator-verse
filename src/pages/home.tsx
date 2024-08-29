import React, {Fragment} from 'react';
import { Creators } from '../components/Creators.tsx'
import {Link} from "react-router-dom";
import { Addcreator } from '../pages/addcreator.tsx'
import AllcreatorsButton from "../components/AllcreatorsButton.tsx";
import AddcreatorsButton from "../components/AddcreatorsButton.tsx";
export function Home(props) {

    return(

        <Fragment>
            <section>
            <AddcreatorsButton />
            <AllcreatorsButton />
            </section>
            <section>
                <Creators />
            </section>
        </Fragment>
    );
}