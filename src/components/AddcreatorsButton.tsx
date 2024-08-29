import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function AddcreatorsButton(props) {
    return (
        <Fragment>

                <Link to="/" component="<Home />">
                    <button className="secondary">
                        All Creators
                    </button>
                </Link>

        </Fragment>
    );
}

export default AddcreatorsButton;