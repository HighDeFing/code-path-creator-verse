import React, {Fragment} from 'react';
import  { supabase } from '../client.js';
import { useEffect, useState } from "react";
import {Link, Navigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddcreatorsButton from "../components/AddcreatorsButton.tsx";
import AllcreatorsButton from "../components/AllcreatorsButton.tsx";

export function Addcreator(props) {

    const [creator, putCreator] = useState({
        name: "",
    imageURL: "",
        url: "",
        description: "",
        uuid_key: ""
    });

    //const uuid_key = uuidv4();

    useEffect(() => {
      insertCreator();
    }, []);

    async function insertCreator() {
        const {data, error} = await supabase
            .from('creators')
            .insert([
                {primaryKey: uuidv4(), name: `${creator.name}`, url: `${creator.url}`, description: `${creator.description}`,
                    imageURL: `${creator.imageURL}`}
            ])
            .select();
        }



             const handleSubmit = (event) => {
                event.preventDefault();
                insertCreator().then(() => {alert(`Creator with name: ${creator.name}, image url ${creator.imageURL}, creator link${creator.url} and description ${creator.description}, was added`)
                }).then(( ) => {
                window.location.replace("/")
                });
            }


    return (
        <Fragment>

            <section>
                <AddcreatorsButton/>
                <AllcreatorsButton/>
            </section>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <br/><input type="text" value={creator.name}
                    onChange={(e) => putCreator({...creator, name: e.target.value})}/><br/>
                </label>
                <label>Image:
                    <input type="text" placeholder="Provide a link to an image of your creator. Be sure to include the http://" value={creator.imageURL}
                    onChange={(e) => putCreator({...creator, imageURL: e.target.value})}/><br/>
                </label>
                <label>Description: <br/> </label>
                    <textarea
                        value={creator.description}
                        placeholder="Provide a description of the creator. Who are they? What makes them interesting?"
                    onChange={(e) => putCreator({...creator, description: e.target.value})}>
                    </textarea>
                <label>Social Media Links:
                    <input type="text" placeholder="Provide at least one of the creator's social media links." value={creator.url}
                    onChange={(e) => putCreator({...creator, url: e.target.value})}/><br/>
                </label>
                <input type="submit"/>
            </form>
        </div>
        </Fragment>
    );
}
