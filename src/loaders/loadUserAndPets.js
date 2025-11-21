export default async function loadUserAndPets() {
  
    const response = await fetch('https://davids-api.onrender.com/api/db')

    const data = await response.json()

    return data;

}