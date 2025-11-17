import { Link } from "react-router";

import dog from '../../assets/dog.jpg'
import { IoMdHeartEmpty } from "react-icons/io";

import './Dog.sass'

export default function Dog() {

    return (
        <Link to={"/details"}>
            <section className='pet-finder__dog'>

                <img src={dog} alt="" className='pet-finder__dog-image' />
            
                <article className='pet-finder__dog-description'>
                    <div className='pet-finder__dog-title'>
                        <h1>Breed</h1>
                        <p>location</p>
                    </div>
                    <p>short description</p>
                    <IoMdHeartEmpty className='pet-finder__dog-heart' />
                </article>
                    
            </section>
        </Link>
    )

}