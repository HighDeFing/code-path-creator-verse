import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import  { supabase } from '../client.js';

export function Deletecreator({creator}) {

    async function deleteCreator() {
        const { error } = await supabase
  .from('creators')
  .delete()
  .eq('primaryKey', creator.primaryKey)
    }
    const handleDelete = (event) => {
        event.preventDefault();
        deleteCreator()
        alert(`Creator with name ${creator.name}, was deleted successfully.`);
      }




    return (
        <div>
            <button className="deletecreator" onClick={(e) => handleDelete(e)}>Delete</button>
        </div>
    );
}

export default Deletecreator;