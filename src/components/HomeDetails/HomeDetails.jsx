import { Link, useLoaderData } from "react-router";
import { GrLocation } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { useFavourites } from "../../hooks/Favourites/useFavourites";
import './HomeDetails.sass'


export default function HomeDetails() {

    const data = useLoaderData();
    // console.log(data['dogs']);

    const { addFavourite, isFavourite } = useFavourites();

    return (
        <>
            {data['dogs'] && data['dogs'].length > 0 ? (
                
                data['dogs'].map((pet) => (
                    
                    <section key={pet.id} className='pet-finder__dog shadow'>
                        <img src={`.${pet.image}`} alt={pet.breed} className='pet-finder__dog-image' />
                    
                        <article className='pet-finder__dog-content'>
                            
                            <div className='pet-finder__dog-title'>
                                <Link to={`/details/${pet.id}`} key={pet.id} >
                                    <h2>{pet.breed}</h2>
                                </Link>
                                <div className="dog-location">
                                    <GrLocation className="location-icon" />
                                    <p>{pet.location}</p>
                                </div>
                            </div>

                            <p className="pet-finder__dog-description">{pet.short_description}</p>

                            <button className={`pet-finder__dog-heart shadow ${isFavourite(pet.id) ? "pet-finder__dog-heart--added" : "pet-finder__dog-heart--not-added"}`} onClick={() => addFavourite(pet.id, pet.image, pet.breed, pet.location, pet.gender, pet.short_description)} disabled={isFavourite(pet.id)}>
                                <IoMdHeartEmpty className='' />
                            </button>

                        </article>
                    </section>
                ))
            ) : (
                <section className="pet-finder__no-pets">
                    <h3>No pets have been found</h3>
                </section>
            )}
        </>
    );

}