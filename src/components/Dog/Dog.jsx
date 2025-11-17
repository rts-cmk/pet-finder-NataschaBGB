import { Link } from "react-router";

import dog from '../../assets/dog.jpg'
import { GrLocation } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";

import './Dog.sass'

export default function Dog() {

    return (
        <Link to={"/details"} className='pet-finder__dog'>

                <img src={dog} alt="" className='pet-finder__dog-image' />
            
                <article className='pet-finder__dog-content'>
                    
                    <div className='pet-finder__dog-title'>
                        <h1>Breed</h1>
                        <div className="dog-location">
                            <GrLocation className="location-icon" />
                            <p>location</p>
                        </div>
                    </div>

                    <p className="pet-finder__dog-description">short description</p>

                    <IoMdHeartEmpty className='pet-finder__dog-heart' />
                </article>
                    
        </Link>
    )

}