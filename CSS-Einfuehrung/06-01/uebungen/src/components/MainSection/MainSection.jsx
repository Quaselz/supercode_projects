import ImageSection from "../ImageSection/ImageSection";
import ItemList from "../ItemList/ItemList";

const MainSection = () => {
    const headline = "My Todos"
    const imgHeadline = "Supershop"

    return ( 
        
        <main>
            <section>
                <article>
                    <ItemList headline={headline}/>
                </article>
            </section>
            <section>
                <ImageSection headline={imgHeadline}/>
            </section>
        </main>
        
     );
}
 
export default MainSection;