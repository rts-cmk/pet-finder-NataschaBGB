import { useState } from 'react';
import { useLoaderData } from 'react-router';
import './DisplayPets.sass'
import { GrLocation } from 'react-icons/gr';
import AdminEdit from '../../pages/Admin/AdminEdit';
import Modal from './Modal';

export default function DisplayPets() {
    
    const { pets } = useLoaderData();
    const [selectedPetId, setSelectedPetId] = useState(null);
    // console.log(selectedPetId);
    

    return (
        <section className='admin__pets'>
            
            {pets && pets.length > 0 ? (
                pets.map((pet) => (
                    <section key={pet.id} className='admin__pet shadow'>
                        
                        <img src={pet.image} alt={pet.breed} className='admin__pet-image' />
                        
                        <article className='admin__pet-content'>
                            <div className='admin__pet-title'>
                                <h2>{pet.breed}</h2>
                                <div className='pet-location'>
                                    <GrLocation className='location-icon' />
                                    <p>{pet.location}</p>
                                </div>
                            </div>

                            <p className='admin__pet-description'>{pet.short_description}</p>

                            <button onClick={() => setSelectedPetId(pet.id)}>
                                Edit Pet
                            </button>

                        </article>
                    </section>
                ))
            ) : (
                <section className='admin__no-pets'>
                    <h3>No pets have been found</h3>
                </section>
            )}

            {selectedPetId && (
                <Modal onClose={() => setSelectedPetId(null)}>
                    <AdminEdit
                    key={selectedPetId} 
                    petId={selectedPetId}
                    pet={pets.find(p => p.id === selectedPetId)}
                    />
                </Modal>
            )}
        </section>
    );
}