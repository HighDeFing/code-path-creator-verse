import React, {Fragment, useEffect, useState} from 'react';
import {Link, Route, useLocation, useParams} from 'react-router-dom'
import {Updatecreator} from "./updatecreator.tsx";
import {Addcreator} from "./addcreator.tsx";
import AddcreatorsButton from "../components/AddcreatorsButton.tsx";
import AllcreatorsButton from "../components/AllcreatorsButton.tsx";
import EditButton from "../components/EditButton.tsx";
import {supabase} from "../client";
export function Creatorpage(state) {

    const url_param = useParams()
    //console.log("state", state);
    //console.log("url_param", url_param);

    // const location = useLocation();
    // const { creator } = location.state;
    //console.log("creator", creator);

    //console.log("state", state);

    const [creator, setCreators] = useState([]);

    useEffect(() => {
      getCreators();
    }, []);

    async function getCreators() {
    //console.log('Supabase Instace: ', supabase);
    let {data, error} = await supabase.from('creators').select().eq('primaryKey', url_param.primaryKey)
    //console.log('data: ', data);
    setCreators(data[0])
    }


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
                <a href={creator.url} target="_blank">Creator link</a>
                <p>{creator.description}</p>
                <Link to={`/updatecreator/${creator.primaryKey}`} state={{creator}}><EditButton/></Link>
            </article>
        </Fragment>
    );
}