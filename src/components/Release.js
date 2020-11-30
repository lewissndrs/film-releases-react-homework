import React from "react";

const Release = ({url,name}) => {
    return(
        <li>
            <a href={url}>{name}</a>
        </li>
    )
}

export default Release