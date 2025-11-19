import { Link, useLoaderData } from "react-router";
import { GrLocation } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";

import './Dog.sass'

export default function Dog() {

    const { pets } = useLoaderData();
    // console.log(pets);

    return (
        <>
            {pets.map((pet) => {
                return (
                    <Link to={`/details/${pet.id}`} key={pet.id} className='pet-finder__dog shadow'>

                        <img src={pet.image} alt={pet.breed} className='pet-finder__dog-image' />
                    
                        <article className='pet-finder__dog-content'>
                            
                            <div className='pet-finder__dog-title'>
                                <h1>{pet.breed}</h1>
                                <div className="dog-location">
                                    <GrLocation className="location-icon" />
                                    <p>{pet.location}</p>
                                </div>
                            </div>

                            <p className="pet-finder__dog-description">{pet.short_description}</p>

                            <IoMdHeartEmpty className='pet-finder__dog-heart' />
                        </article>
                            
                </Link>
                )
            })}
            
        </>
    );
    
}