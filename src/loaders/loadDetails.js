export default async function detailsLoader({ params }) {

    const id = params.petId;

    const response = await fetch(`http://localhost:4000/dogs/${id}`);

    if (!response.ok) {
        throw new Response("Not found", { status: 404 });
    }

    return await response.json();

}