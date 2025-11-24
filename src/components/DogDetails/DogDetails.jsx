import { Link, useLoaderData, useParams } from "react-router";
import { GrLocation } from "react-icons/gr";
import { PiPawPrint } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import './DogDetails.sass'


export default function DogDetails() {

    // db.json API
    const petDetails = useLoaderData();

    // Davids API
    // const pets = useLoaderData();
    // console.log(pets);
    
    const { petId } = useParams();
    // console.log(petId);
    
    // const petDetails = pets['dogs'].find(pet => pet.id === Number(petId));

    if (!petDetails) return <p>Dog not found...</p>;


    return (
        <article className="pet-finder__details-dog">

            <img src={petDetails.image} alt={petDetails.breed} className="pet-finder__details-image" />
            {/* <img src={`../${petDetails.image}`} alt={petDetails.breed} className="pet-finder__details-image" /> */}

            <section id={petId} className="pet-finder__details-text">
                
                <section className="pet-finder__details-title">
                    <h1>{petDetails.breed}</h1>
                    <div className="pet-finder__details-location">
                        <GrLocation className="location-icon" />
                        <p>{petDetails.location}</p>
                    </div>
                </section>

                <section className="pet-finder__details-info">
                    <div className="info">
                        <PiPawPrint className="info-icon breed-icon shadow" />
                        <p>{petDetails.breed}</p>
                    </div>
                    <div className="info">
                        <BsGenderAmbiguous className="info-icon gender-icon shadow" />
                        <p>{petDetails.gender}</p>
                    </div>
                </section>

                <section className="pet-finder__details-description">
                    <p>{petDetails.long_description}</p>
                </section>

                <Link to={'/'}>
                    <button className="pet-finder__details-button">Home</button>
                </Link>
                
                
            </section>
        </article>
    );

}