import { Link, useLoaderData } from "react-router";
import { GrLocation } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { useFavourites } from "../../hooks/Favourites/useFavourites";
import './HomeDetails.sass'


export default function HomeDetails() {
  
  const { pets } = useLoaderData();
  // console.log(pets);
  
  
  const { addFavourite, isFavourite } = useFavourites();

  return (
    <section className="home__pets">
      {pets && pets.length > 0 ? (
        pets.map((pet) => (
          <section key={pet.id} className='home__pet shadow'>
            <img src={pet.image} alt={pet.breed} className='home__pet-image' />
            
            <article className='home__pet-content'>
              <div className='home__pet-title'>
                <Link to={`/details/${pet.id}`} key={pet.id}>
                  <h2>{pet.breed}</h2>
                </Link>
                <div className="pet-location">
                  <GrLocation className="location-icon" />
                  <p>{pet.location}</p>
                </div>
              </div>

              <p className="home__pet-description">{pet.short_description}</p>

              <button
                className={`home__pet-heart shadow ${isFavourite(pet.id) ? "home__pet-heart--added" : "home__pet-heart--not-added"}`}
                onClick={() => addFavourite(
                  pet.id,
                  fixImageUrl(pet.image),
                  pet.breed,
                  pet.location,
                  pet.gender,
                  pet.short_description
                )}
                disabled={isFavourite(pet.id)}
              >
                <IoMdHeartEmpty className='' />
              </button>

            </article>
          </section>
        ))
      ) : (
        <section className="home__no-pets">
          <h3>No pets have been found</h3>
        </section>
      )}
    </section>
  );
}