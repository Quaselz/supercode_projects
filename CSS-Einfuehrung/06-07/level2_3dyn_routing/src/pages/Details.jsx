import { useParams } from "react-router-dom";
import { data } from "../data/cars"
import './CarDetails.css'
 
const Details = () => {
    const params = useParams()
    const id = params.id

    return ( 
        <>
            <section className="carDetail">
                <p>{data[id].CarMake}</p>
                <p>{data[id].carModel}</p>
                <p>{data[id].CarYear}</p>
            </section>
        </>
     );
}
 
export default Details;
