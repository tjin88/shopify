import React, {useState, useEffect} from "react";
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';

const Cards = ({
    title, date, explanation, mediaType, url, cardNum
}) => { 
    const [like, setLike] = useState("");
    const [animation1, setAnimation1] = useState("fadeOut")    // Animation = when button clicked, do this animation

    const thisTitle = `Title${cardNum}`
    const thisDate = `Date${cardNum}`
    const thisExplanation = `Explanation${cardNum}`
    const thisMediaSection = `Media_section${cardNum}`
    const thisSrc = `Src${cardNum}`
    const thisLink = `Link${cardNum}`
    const thisButton = `Button${cardNum}`


    useEffect(() => {
        let checkButtonAndHTMLAreRendered = document.getElementById(thisButton);
        if (checkButtonAndHTMLAreRendered) {
            document.getElementById(thisTitle).innerText = title;
            document.getElementById(thisDate).innerText = date;
            document.getElementById(thisExplanation).innerHTML = explanation;
        
            if(mediaType==="image"){
                document.getElementById(thisLink).href = url;
                document.getElementById(thisSrc).src = url;
            } else {
                document.getElementById(thisSrc).src = url;
            }
        }
    }, [])

    const buttonClicked = () => {
        if (like === "" || like === "You have unliked this post") {
            setLike("You have liked this post")
            setAnimation1("fadeIn")
        } else { 
            setLike("You have unliked this post")
            setAnimation1("fadeOut")
        }
    }

    console.log("Props\nTitle:" + title + ", date: " + date + ", explanation: " + explanation + ", mediaType: " + mediaType + ", url: " + url)

    if (mediaType==="image") {
        return (
            // <div className = "card" key = {cardNum}>
            <div className = "card">
                <section className = "Media_section" id = {thisMediaSection}>
                    <a id={thisLink} href="" target="-blank">
                        <div className = "image-div"> {/* THIS IS CLASS, not CLASSNAME!!! ***Change everywhere*** */}
                            <img className = "image" id={thisSrc} src="" alt="image-by-nasa"/>
                        </div>
                    </a>
                </section>
                <p className = "titleAndDate">
                    <span className = "Title" id = {thisTitle}></span>
                    <span className = "Date" id = {thisDate}></span>
                </p>
                
                {/* <p className = "Title" id = {thisTitle}><span className = "Date" id = {thisDate}></span></p>
                <p class="split-para">This text is left. <span>This text is right.</span></p> */}

                <h3 className = "Explanation" id = {thisExplanation}></h3>
                <button className = "button" id = {thisButton} onClick = {buttonClicked}>
                    <FontAwesomeIcon 
                        // className = {`heartIcon ${animation1}`}
                        className = {`heartIcon`}
                        id = "heartIcon" 
                        icon = {faHeartRegular}
                        mask="square-full"
                        color="white"
                        inverse
                    />
                    <FontAwesomeIcon 
                        className = {`heartIcon overlap ${animation1}`}
                        id = "heartIcon" 
                        icon = {faHeartSolid}
                        mask="square-full"
                        color="white"
                        inverse
                    />
                    
                    <svg width="0" height="0">
                        <radialGradient id="rg" r="150%" cx="30%" cy="90%">
                            {/* <stop stop-color="#fdf497" offset="0" /> */}
                            <stop stopColor="#fdf497" offset="0.05" />
                            <stop stopColor="#fd5949" offset="0.45" />
                            <stop stopColor="#d6249f" offset="0.6" />
                            {/* <stop stop-color="#285AEB" offset="0.9" /> */}
                        </radialGradient>
                    </svg>

                    <div className = "buttonText">
                        {like === "" 
                        ? <p className = "emptyText">This web app was made by Tristan Jin</p>
                        : <p className = "likeText">{like}</p>}
                    </div>
                </button>
            </div>
        );
    } else {
        return (
            // <div className = "card" key = {cardNum}>
            <div className = "card">
                <section className = "Media_section" id = {thisMediaSection}>
                    <div className = "video-div"> 
                        <iframe className = "video" id={thisSrc} src="" frameborder="0">
                        </iframe>
                    </div>
                </section>
                <h1 className = "Title" id = {thisTitle}></h1>
                <h2 className = "Date" id = {thisDate}></h2>
                <h3 className = "Explanation" id = {thisExplanation}></h3>
                <button className = "button" id = {thisButton} onClick = {buttonClicked}>
                    <FontAwesomeIcon 
                        // className = {`heartIcon ${animation1}`}
                        className = {`heartIcon`}
                        id = "heartIcon" 
                        icon = {faHeartRegular}
                        mask="square-full"
                        color="white"
                        inverse
                    />
                    <FontAwesomeIcon 
                        className = {`heartIcon overlap ${animation1}`}
                        id = "heartIcon" 
                        icon = {faHeartSolid}
                        mask="square-full"
                        color="white"
                        inverse
                    />
                    
                    <svg width="0" height="0">
                        <radialGradient id="rg" r="150%" cx="30%" cy="90%">
                            <stop stop-color="#fdf497" offset="0.05" />
                            <stop stop-color="#fd5949" offset="0.45" />
                            <stop stop-color="#d6249f" offset="0.6" />
                        </radialGradient>
                    </svg>

                    <div className = "buttonText">
                        {like === "" 
                        ? <p className = "emptyText">This web app was made by Tristan Jin</p>
                        : <p className = "likeText">{like}</p>}
                    </div>
                </button>
            </div>
        );
    }
}

export default Cards;

