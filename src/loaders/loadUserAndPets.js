export default async function loadUserAndPets() {
  
    const [userResponse, petsResponse] = await Promise.all([
        fetch('http://localhost:4000/user'),
        fetch('http://localhost:4000/dogs')
    ]);

    const [user, pets] = await Promise.all([
        userResponse.json(),
        petsResponse.json()
    ]);

    return { user, pets };

}