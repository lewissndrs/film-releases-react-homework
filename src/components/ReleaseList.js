import React from "react";
import Release from "./Release";

const ReleaseList = ({releases}) => {

    const releaseNode = releases.map( (release) => {
        return (<Release key={release.id} url={release.url} name={release.name} />)
    })

    return(

        <ul className="release-list">
            {releaseNode}
        </ul>
    )
}


export default ReleaseList;