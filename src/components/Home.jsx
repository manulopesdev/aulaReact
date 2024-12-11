import React from "react";
import Qd from "./Quadro";
import '../App.css'
import Quadro from "./Quadro";
import Header from "./Header";

const Home = () =>{
    return(
        <div className="container">
                <Header />
                <div className="flexDiv">
                <Quadro />
                <Quadro />
                <Quadro />
                <Quadro />
                </div>
        </div>
    )
};
export default Home;