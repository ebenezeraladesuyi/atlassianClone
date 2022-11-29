import React from "react";
// import { useRoutes } from "react-router-dom";
import styled from "styled-components"
import Solutions from "./Home/Solutions";
import Watc from "./Home/Watc";
import Career from "./HomeComp/career";
import Customer from "./HomeComp/customer";
import Community from "./HomeComp/explore";
import Fearless from "./HomeComp/fearless";
import Footer from "./HomeComp/footer";
import Possible from "./HomeComp/possible";
import Worklife from "./HomeComp/work";


const HomeScreen = () => {

    return (
        <div>
            <Possible />
            <Solutions />
            <Watc />
            <Community />
            <Worklife />
            <Fearless />
            <Career />
            <Footer />
            {/* <Customer /> */}

        </div>
    )
}

export default HomeScreen