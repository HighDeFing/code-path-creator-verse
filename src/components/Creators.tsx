import React, {Fragment} from 'react';
import  { supabase } from '../client.js';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import InfoButton from "./InfoButton.tsx";

export function Creators(props) {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
      getCreators();
    }, []);

    async function getCreators() {
    //console.log('Supabase Instace: ', supabase);
    let {data, error} = await supabase.from('creators').select()
    //console.log('data: ', data);
    setCreators(data)
    }

    //console.log(creators);

    return (

            <div class="grid">
                {creators.map((creator) => (
                    <Fragment>
                        <article>
                            <header>
                            <img src={creator.imageURL} width={250} height={250}></img>
                            <h2>{creator.name}</h2>
                            </header>
                            <a href={creator.url}>Creatorpage link</a>
                            <p>{creator.description}</p>
                            <Link to="/creatorpage" state={{creator}}><InfoButton/></Link>
                        </article>
                    </Fragment>
                ))}
            </div>


    );
}




