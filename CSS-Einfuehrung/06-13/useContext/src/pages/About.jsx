import Nav from "../components/Nav/Nav";

import { useContext } from "react";
import { loadContext } from "../Context/Context";
import Loading from "../components/Loading/Loading";

const About = () => {
    const {load, setLoad } = useContext(loadContext)

    return ( 
        load?
        <>
        <Nav />
        <h1>About</h1>
        </>:
        <>
            <Loading />
        </> 
    );
}
 
export default About;