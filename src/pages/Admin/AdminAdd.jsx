import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import './Admin.sass'
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";



export default function AdminAdd() {

  const [category, setCategory] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [breed, setBreed] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [short_description, setShortDescription] = useState(null);
  const [long_description, setLongDescription] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    
    event.preventDefault();

    if (!category || !imageFile || !breed || !gender || !location || !short_description || !long_description) {
      alert("One or more fields are empty.");
      return;
    }
    
    // if breed, gender, location has numbers
    // if () {
    //   alert('Breed, gender or location contains numbers.');
    //   return;
    // }
    
    // if short_description has more than 150 characters

    // if long_description has more than 350 characters

    const formData = new FormData(event.target);

    // const data = Object.fromEntries(formData);
    const data = {
      category: formData.get("category"),
      image: formData.get("image"),
      breed: formData.get("breed"),
      gender: formData.get("gender"),
      location: formData.get("location"),
      short_description: formData.get("short_description"),
      long_description: formData.get("long_description"),
    };

    // console.log(data);

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(() => {
      alert("Pet added!");
      navigate("/");
    });

  };


  return (
    <>

      <Header />

      <main className="admin">

        <h2>Add a new pet</h2>

        <form onSubmit={handleSubmit} className="admin__add-pet">
          
          <label className="admin__label">
            <span>Category</span>
            <select name="category" onChange={(event) => setCategory(event.target.value)}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="admin__label">
            <span>Image</span>
            <input type="text" name="image" onChange={(event) => setImageFile(event.target.value)} />
          </label>

          <label className="admin__label">
            <span>Breed</span>
            <input type="text" name="breed" placeholder="Dog Breed" onChange={(event) => setBreed(event.target.value)}/>
          </label>

          <label className="admin__label">
            <span>Gender</span>
            <input type="text" name="gender" placeholder="Dog gender" onChange={(event) => setGender(event.target.value)}/>
          </label>

          <label className="admin__label">
            <span>Location</span>
            <input type="text" name="location" placeholder="Dog location" onChange={(event) => setLocation(event.target.value)}/>
          </label>

          <label className="admin__label">
            <span>Short Description</span>
            <textarea name="short_description" placeholder="Short Description..." onChange={(event) => setShortDescription(event.target.value)}/>
          </label>

          <label className="admin__label">
            <span>Long Description</span>
            <textarea name="long_description" placeholder="Long Description..." onChange={(event) => setLongDescription(event.target.value)}/>
          </label>

          <button>
            Add Pet
            <IoIosArrowForward />
          </button>

        </form>
      </main>

      <Navigation />
    </>
  );

}