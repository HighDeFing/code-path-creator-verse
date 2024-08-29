import React, {Fragment} from 'react';
import {Link, Route, useLocation} from 'react-router-dom'
import {Updatecreator} from "./updatecreator.tsx";
import {Addcreator} from "./addcreator.tsx";
export function Creatorpage(props) {

    const location = useLocation();
    const { creator } = location.state;
    console.log("creator", creator);
    return(
        <Fragment>
            <Link to="/">All Creators </Link>
            <Link to="/addcreator">Add Creator</Link>
            <div className="card">
                <img src={creator.imageURL} width={250} height={250}></img>
                <h2>{creator.name}</h2>
                <a href={creator.url}>Creatorpage link</a>
                <p>{creator.description}</p>
                <Link to="/updatecreator" state={{creator}}>Edit</Link>
            </div>
        </Fragment>
    );
}