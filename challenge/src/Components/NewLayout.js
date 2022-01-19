import React, {useState, useEffect, useLayoutEffect } from 'react';
import './NewLayout.css';
import Cards from './Cards';

const NewLayout = () => {
    const [loading, setLoading] = useState(1);
    const [allCards, setAllCards] = useState([]);
    const [like, setLike] = useState("Like");

    const numImagesWanted = 10;

    useEffect(() => {
        //Should fetch 10 random images from Nasa's APOD api
        fetch(`https://api.nasa.gov/planetary/apod?api_key=CQfpermuPGKWdheRLzTgUlnmMpfl0Us328mymJ8x&count=${numImagesWanted}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            receiveData(json);

            console.log("allCards: " + allCards)

            setLoading(0);
            document.getElementById("loading").remove();
            console.log(loading);
        })
        .catch((message) => {
            console.log(message);
        })
    }, []);

    const receiveData = (data) => {
        for (let i = 0; i < numImagesWanted; i++) {
            setAllCards(oldArray => [...oldArray, 
                <Cards 
                title = {data[i].title} 
                date = {data[i].date} 
                explanation = {data[i].explanation} 
                mediaType = {data[i].media_type} 
                url = {data[i].url}
                cardNum = {i}
                />
            ])
        }
    }

    return (
        <div className>
            <h1 className = "title"> Spacetagram </h1>
            <p className = "subTitle"> Brought to you by NASA's Image API</p>
            <section className = "cards__section" id = "cards__section">
                <p className = "loading" id = "loading">
                    The data is being fetched ...
                </p>
                {allCards}
            </section>
        </div>
    );
}

export default NewLayout;