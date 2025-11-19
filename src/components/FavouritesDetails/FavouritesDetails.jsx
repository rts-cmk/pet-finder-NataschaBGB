import { useFavourites } from "../../hooks/Favourites/useFavourites.jsx";
import { LuTrash } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { Link, useLoaderData } from "react-router";
import './FavouritesDetails.sass'


export default function FavoritesDetails() {

    const { favourite, removeFavourite } = useFavourites();

    return (
        <>
            {favourite && favourite.length > 0 ? (
                favourite.map((pet) => (
                
                    <section key={pet.id} className='pet-finder__favourite shadow'>
                        <img src={pet.img} alt={pet.breed} className='pet-finder__favourite-image' />
                    
                        <article className='pet-finder__favourite-content'>
                            
                            <div className='pet-finder__favourite-title'>
                                <Link to={`/details/${pet.id}`} key={pet.id} >
                                    <h1>{pet.title}</h1>
                                </Link>
                                <div className="favourite-location">
                                    <GrLocation className="location-icon" />
                                    <p>{pet.location}</p>
                                </div>
                            </div>

                            <p className="pet-finder__favourite-description">{pet.description}</p>
                            
                            <button onClick={() => removeFavourite(pet.id)} className="pet-finder__favourite-delete">
                                <LuTrash />
                            </button>

                        </article>
                    </section>
                ))
            ) : (
                <section className="pet-finder__no-pets">
                    <h3>No pets have been saved</h3>
                </section>
            )}
        </>
    );

}