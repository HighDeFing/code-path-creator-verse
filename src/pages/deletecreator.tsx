import React, {Fragment, useState} from 'react';
import {useLocation} from "react-router-dom";
import  { supabase } from '../client.js';

export function Deletecreator({creator}) {

    async function deleteCreator() {
        const { error } = await supabase
  .from('creators')
  .delete()
  .eq('primaryKey', creator.primaryKey);
        window.location.replace("/");
    }
    const handleDelete = (event) => {
        event.preventDefault();
        deleteCreator()
        alert(`Creator with name ${creator.name}, was deleted successfully.`);

      }




    return (
        <Fragment>
            <div className="pico-background-red-550" role="button" onClick={(e) => handleDelete(e)}>Delete</div>
        </Fragment>
    );
}

export default Deletecreator;