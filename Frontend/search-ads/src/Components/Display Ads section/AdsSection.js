import React, { useEffect, useState } from 'react';
import "./AdsSection.css";
import { useSelector } from "react-redux";

const AdsSection = () => {
    const [data, setData] = useState();                 //state to store fetched data 

    const sliceData = useSelector((state) => {
        return state.search;                        //accessing the keyword(initialState value) from redux store
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const config = {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                        "keyword": sliceData                //sending the keyword to backend with POST request
                    })
                }
                const res = await fetch('/', config);
                setData(await res.json());              //storing the respond from the backend into the state
            }
            catch (error) {
                console.log(error)
            }

        }
        fetchData();
    }, [sliceData]);            //rendering the component every time sliceData is updated or changed

    return (
        <div className="adsContainer">
            {data?.map((ad) =>
            (<div className="card" key={ad._id}>
                {
                    (ad.result[0]?.imageUrl) === undefined ?
                        <img src="./Background-Image/images.png" alt="Not Available" /> :
                        <img src={"https://drive.google.com/uc?export=view&id=" + ad.result[0]?.imageUrl.split("/")[5]} alt="Not Available" />
                }

                {
                    (ad.result[0]?.headline) === undefined ?
                        <h2 className='heading'>{ad.name}</h2> :
                        <h2 className='heading'>{ad.result[0]?.headline}</h2>
                }

                {
                    (ad.result[0]?.primaryText) === undefined ?
                        <span className='primaryText'></span> :
                        <span className='primaryText'>{ad.result[0]?.primaryText}</span>
                }

                {
                    (ad.result[0]?.description) === undefined ?
                        <p className='desc'>No information available</p> :
                        <p className='desc'>{ad.result[0]?.description}</p>
                }

                {
                    (ad.result[0]?.CTA) === undefined ?
                        <button className='cta' onClick={() => window.open("https://www." + ad.url, "./blank")}>{ad.name}</button> :
                        <button className='cta' onClick={() => window.open("https://www." + ad.url, "./blank")}>{ad.result[0]?.CTA}</button>
                }
            </div>)
            )
            }

        </div>
    )
}

export default AdsSection