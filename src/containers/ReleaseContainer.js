import React, {useState} from "react";
import ReleaseList from "../components/ReleaseList";


const ReleaseContainer = () => {

    const[releases,setRelease] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    )

    return(
        <div className="release-container">
            <h2>Upcoming Film Releases for UK.</h2>
            <div className="divider-line"></div>
            <ReleaseList releases={releases} />
            <div className="divider-line"></div>
            <div className="grey-box">
                <a href="https://www.imdb.com/calendar/?region=gb"><h2>View more upcoming releases</h2></a>
            </div>

        </div>
    )
}

export default ReleaseContainer;