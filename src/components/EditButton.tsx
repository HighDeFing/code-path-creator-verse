import React from 'react';
import editImg from '../assets/icons8-edit-50.png'

function EditButton(props) {
    return (
        <button>
            <img src={editImg}/>
        </button>
    );
}

export default EditButton;