import Btn from "../components/Btn/Btn";
import Nav from "../components/Nav/Nav";

const Home = () => {
    return ( 
        <>
        <section>
            <article>
                <Nav />
            </article>
            <article>
            <h1>Welcome to my simple Blog</h1>
            <Btn text="Go to articles" href="/Blog"/>
            </article>
        </section>

        </>
        
     );
}
 
export default Home;