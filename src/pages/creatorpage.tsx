import React, {Fragment} from 'react';
import {Link, Route, useLocation} from 'react-router-dom'
import {Updatecreator} from "./updatecreator.tsx";
import {Addcreator} from "./addcreator.tsx";
import AddcreatorsButton from "../components/AddcreatorsButton.tsx";
import AllcreatorsButton from "../components/AllcreatorsButton.tsx";
import EditButton from "../components/EditButton.tsx";
export function Creatorpage(props) {

    const location = useLocation();
    const { creator } = location.state;
    console.log("creator", creator);
    return(
        <Fragment>
            <section>
                <AddcreatorsButton/>
                <AllcreatorsButton/>
            </section>
            <article>
                <header>
                <img src={creator.imageURL} width={250} height={250}></img>
                <h2>{creator.name}</h2>
                </header>
                <a href={creator.url}>Creator link</a>
                <p>{creator.description}</p>
                <Link to="/updatecreator" state={{creator}}><EditButton/></Link>
            </article>
        </Fragment>
    );
}