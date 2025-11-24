import { fixImageUrl } from "../utils/fixImageUrl";

export default async function detailsLoader({ params }) {
    const id = params.petId;

    const response = await fetch(`http://localhost:4000/pets/${id}`);

    if (!response.ok) {
        throw new Response("Not found", { status: 404 });
    }

    const pet = await response.json();
    
    return { ...pet, image: fixImageUrl(pet.image) };

}