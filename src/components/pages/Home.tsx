import React from 'react'
import './Home.css'
import banner from "../../assets/banner.jpeg";


const Home = () => {
    return (
        <React.Fragment>
            <img src={banner} alt="" className="home-banner" />
            <div className="flex-container">
                <div>
                    Jason to come up with some marketing contents to introduce crispy union.
                </div>
                <br />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti non quibusdam! Beatae illum dolor saepe assumenda quisquam enim hic fugiat. Rerum, similique! Perferendis est, rem placeat adipisci consequuntur consectetur?
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti non quibusdam! Beatae illum dolor saepe assumenda quisquam enim hic fugiat. Rerum, similique! Perferendis est, rem placeat adipisci consequuntur consectetur?
                </div>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti non quibusdam! Beatae illum dolor saepe assumenda quisquam enim hic fugiat. Rerum, similique! Perferendis est, rem placeat adipisci consequuntur consectetur?
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
