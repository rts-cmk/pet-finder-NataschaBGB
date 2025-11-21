import { Link } from "react-router";
import animal from '../assets/images/animal.svg'
import '../style/_layout.sass'


export default function Splashscreen() {

    return (
        <main className='pet-finder__splashscreen'>
            <figure>
                <img src={animal} alt="pet-finder_image" className='pet-finder__splashscreen-image' />
                <figcaption className='pet-finder__splashscreen-title'>
                    <h1>My Pets</h1>
                    <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
                </figcaption>
            </figure>
    
            <Link to={"/"} className="pet-finder__splashscreen-button-container">
                <button className='pet-finder__splashscreen-button'>Skip</button>
            </Link>
            
        </main>
    )

}