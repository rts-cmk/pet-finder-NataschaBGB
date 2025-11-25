import { useLoaderData, useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import './Admin.sass'
import Navigation from "../../components/Navigation/Navigation";

export default function AdminEdit({ petId, pet }) {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      "category": formData.get("category"),
      "image": formData.get("image"),
      "breed": formData.get("breed"),
      "gender": formData.get("gender"),
      "location": formData.get("location"),
      "short_description": formData.get("short_description"),
      "long_description": formData.get("long_description"),
    };

    fetch(`http://localhost:4000/pets/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(() => {
      alert("Pet Updated!");
      navigate("/admin");
      
    });
  };

  return (
    <>
      <section id={petId} className="admin__edit">
        <h2>Edit Pet</h2>

        <form onSubmit={handleSubmit} className="admin__edit-pet">

          <label className="admin__label">
            <span>Category</span>
            <select name="category" defaultValue={pet.category}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <span>Image</span>
            <input type="text" name="image" defaultValue={pet.image} />
          </label>

          <label>
            <span>Breed</span>
            <input type="text" name="breed" defaultValue={pet.breed} />
          </label>

          <label>
            <span>Gender</span>
            <input type="text" name="gender" defaultValue={pet.gender} />
          </label>

          <label>
            <span>Location</span>
            <input type="text" name="location" defaultValue={pet.location} />
          </label>

          <label>
            <span>Short Description</span>
            <textarea name="short_description" defaultValue={pet.short_description} />
          </label>

          <label>
            <span>Long Description</span>
            <textarea name="long_description" defaultValue={pet.long_description} />
          </label>

          <button type="submit">
            Save Changes
            <IoIosArrowForward />
          </button>

        </form>
      </section>

      <Navigation />
    </>
  );
}