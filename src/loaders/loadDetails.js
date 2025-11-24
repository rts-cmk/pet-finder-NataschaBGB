export default async function detailsLoader({ params }) {

    const id = params.petId;

    // db.json API
    const response = await fetch(`http://localhost:4000/dogs/${id}`);

    // Davids API
    // const response = await fetch(`https://davids-api.onrender.com/api/db`);

    if (!response.ok) {
        throw new Response("Not found", { status: 404 });
    }

    return await response.json();

}