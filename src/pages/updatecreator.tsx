import {Fragment} from 'react';
import  { supabase } from '../client.js';
import { useEffect, useState } from "react";
import {Link, useLocation, useParams} from 'react-router-dom';
import Deletecreator from "../components/deletecreator.tsx";

export function Updatecreator(props) {

    const { state } = useLocation();
    const creator_placeholder = state.creator;

    console.log("This is a message", creator_placeholder);
    const [creator, putCreator] = useState({
        primaryKey: creator_placeholder.primaryKey,
        name: creator_placeholder.name,
    imageURL: creator_placeholder.imageURL,
        url: creator_placeholder.url,
        description: creator_placeholder.description
    });

    // useEffect(() => {
    //   insertCreator();
    // }, []);

    async function insertCreator() {
        const { data, error } = await supabase
  .from('creators')
  .update({ name: `${creator.name}`, url: `${creator.url}`, description: `${creator.description}`,
                    imageURL: `${creator.imageURL}`})
  .eq('primaryKey', creator.primaryKey)
  .select()
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    insertCreator()
    alert(`Creator with name ${creator.name}, image url ${creator.imageURL}, creator link${creator.url} and description ${creator.description}
    , was updated`);
      }


    return (
        <Fragment>

            <div>
        <Link to="/" component="<Home />">All Creators </Link>
        <Link to="/addcreator" component="<Addcreator />">Add Creator</Link>
            </div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <br/><input type="text" value={creator.name}
                    onChange={(e) => putCreator({...creator, name: e.target.value})}/><br/>
                </label>
                <label>Image:
                    <p>Provide a link to an image of your creator. Be sure to include the http://</p>
                    <input type="text" value={creator.imageURL}
                    onChange={(e) => putCreator({...creator, imageURL: e.target.value})}/><br/>
                </label>
                <label>Description: <br/>
                    <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                    <input type="text" value={creator.description}
                    onChange={(e) => putCreator({...creator, description: e.target.value})}/><br/>
                </label>
                <label>Social Media Links:
                    <p>Provide at least one of the creator's social media links.</p>
                    <input type="text" value={creator.url}
                    onChange={(e) => putCreator({...creator, url: e.target.value})}/><br/>
                </label>
                <input type="submit"/>
            </form>
        </div>
            <div>
                <Deletecreator creator={creator} />
            </div>
        </Fragment>
    );
}
