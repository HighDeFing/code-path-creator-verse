import React, {Fragment} from 'react';
import  { supabase } from '../client.js';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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

            <div>
                {creators.map((creator) => (
                    <Fragment>
                        <div className="card">
                            <img src={creator.imageURL} width={250} height={250}></img>
                            <h2>{creator.name}</h2>
                            <a href={creator.url}>Creatorpage link</a>
                            <p>{creator.description}</p>
                            <Link to="/creatorpage" state={{creator}}>Info</Link>
                        </div>
                    </Fragment>
                ))}
            </div>


    );
}




