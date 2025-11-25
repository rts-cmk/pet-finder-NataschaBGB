// import DeletePet from '../DeletePet/DeletePet'
import './DisplayPets.sass'


export default function DisplayPets() {

    return (
        <section className='admin__pets'>
            {pets && pets.length > 0 ? (
                pets.map((pet) => (
                <section key={pet.id} className='admin__pet shadow'>
                    <img src={pet.image} alt={pet.breed} className='pet-finder__pet-image' />
                    
                    <article className='pet-finder__pet-content'>
                    <div className='pet-finder__pet-title'>
                        <Link to={`/details/${pet.id}`} key={pet.id}>
                        <h2>{pet.breed}</h2>
                        </Link>
                        <div className="pet-location">
                        <GrLocation className="location-icon" />
                        <p>{pet.location}</p>
                        </div>
                    </div>

                    <p className="pet-finder__pet-description">{pet.short_description}</p>

                    <button
                        className={`pet-finder__pet-heart shadow ${isFavourite(pet.id) ? "pet-finder__pet-heart--added" : "pet-finder__pet-heart--not-added"}`}
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
                <section className="pet-finder__no-pets">
                <h3>No pets have been found</h3>
                </section>
            )}
        </section>
    )

}