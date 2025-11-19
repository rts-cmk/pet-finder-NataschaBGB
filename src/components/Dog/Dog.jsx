import { Link, useLoaderData } from "react-router";
import { GrLocation } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { useFavourites } from "../../hooks/Favourites/useFavourites";
import './Dog.sass'


export default function Dog() {

    const { pets } = useLoaderData();
    // console.log(pets);

    const { addFavourite, isFavourite } = useFavourites();

    return (
        <>
            {pets && pets.length > 0 ? (
                pets.map((pet) => (
                    
                    <section key={pet.id} className='pet-finder__dog shadow'>
                        <img src={pet.image} alt={pet.breed} className='pet-finder__dog-image' />
                    
                        <article className='pet-finder__dog-content'>
                            
                            <div className='pet-finder__dog-title'>
                                <Link to={`/details/${pet.id}`} key={pet.id} >
                                    <h1>{pet.breed}</h1>
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