export default async function loadPets() {

    const response = await fetch('http://localhost:4000/dogs');

    return response.json();

}