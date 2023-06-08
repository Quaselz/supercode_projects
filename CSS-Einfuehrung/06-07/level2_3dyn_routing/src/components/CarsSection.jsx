import ArticleCars from './ArticleCars'
import {data} from '../data/cars'
import './CarsSection.css'

const CarSection = () => {
    console.log(data);
    return ( 
        <section className="carSection">
            {data.map((car, index) => 
                <ArticleCars id={car.id} make={car.CarMake} key={index} />
            )}
        </section>
     );
}
 
export default CarSection;