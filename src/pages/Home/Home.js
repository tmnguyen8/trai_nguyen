import React from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Carousel from "../../components/Carousel/Carousel";

function Home(props) {
    // console.log(props.content)
    return (
        <div>
            <Jumbotron content = {props.content}/>
            <Carousel />
        </div>
    )
}

export default Home;