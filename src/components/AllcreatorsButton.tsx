import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function AllcreatorsButton(props) {
    return (
        <Fragment>
                <Link to="/addcreator" component="<Addcreator />">
                    <button>
                        Add Creator
                    </button>
                </Link>

        </Fragment>

);
}

export default AllcreatorsButton;