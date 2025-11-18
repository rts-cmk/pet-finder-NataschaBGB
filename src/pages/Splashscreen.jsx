import { Link } from "react-router";
import animal from '../assets/images/animal.svg'
import '../style/_layout.sass'


export default function Splashscreen() {

    return (
        <main className='pet-finder__splashscreen'>
            <img src={animal} alt="pet-finder_image" className='pet-finder__splashscreen-image' />
            <div className='pet-finder__splashscreen-title'>
                <h1>My Pets</h1>
                <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
            </div>
    
            <Link to={"/dogs"}>
                <button className='pet-finder__splashscreen-button'>Skip</button>
            </Link>
            
        </main>
    )

}