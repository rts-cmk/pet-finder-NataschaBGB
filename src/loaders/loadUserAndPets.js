export default async function loadUserAndPets() {
  const [userResponse, petsResponse] = await Promise.all([
    fetch("http://localhost:4000/user"),
    fetch("http://localhost:4000/pets?_sort=id&_order=desc")
  ]);

  const [user, pets] = await Promise.all([
    userResponse.json(),
    petsResponse.json()
  ]);

  return {user, pets};



  // Davids API
    // const response = await fetch('https://davids-api.onrender.com/api/db')

    // const data = await response.json()

    // return data;

}