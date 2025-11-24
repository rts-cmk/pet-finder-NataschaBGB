import './SubmitNewDog.sass'
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const SubmitNewDog = () => {
  const [imageFile, setImageFile] = useState(null);

  console.log("imageFile:", imageFile);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!imageFile) {
      alert("Please select an image.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("image", imageFile);

    try {
        const uploadRes = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: uploadData,
        });

      console.log("Upload response status:", uploadRes.status);

      const uploadJson = await uploadRes.json();
      console.log("Upload JSON:", uploadJson);

      const { imageUrl } = uploadJson;

      const dogData = {
        image: imageUrl,
        breed: formData.get("breed"),
        gender: formData.get("gender"),
        location: formData.get("location"),
        short_description: formData.get("short_description"),
        long_description: formData.get("long_description"),
      };

      const petRes = await fetch("http://localhost:4000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dogData),
      });

      const petResult = await petRes.json();
      console.log("Dog added:", petResult);

    } catch (err) {
      console.error("Error uploading dog:", err);
    }
  };

  return (
    <section className="pet-finder__admin-add-dog">
      <h2>Add a new dog</h2>

      <form onSubmit={handleSubmit} className="pet-finder__admin-form">
        <label>
          Image
          <input
            type="file"
            name="image"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </label>

        <label>
          Breed
          <input type="text" name="breed" placeholder="Dog Breed" />
        </label>

        <label>
          Gender
          <input type="text" name="gender" placeholder="Dog gender" />
        </label>

        <label>
          Location
          <input type="text" name="location" placeholder="Dog location" />
        </label>

        <label>
          Short Description
          <textarea name="short_description" placeholder="Short Description..." />
        </label>

        <label>
          Long Description
          <textarea name="long_description" placeholder="Long Description..." />
        </label>

        <button>
          Submit <IoIosArrowForward />
        </button>
      </form>
    </section>
  );
};

export default SubmitNewDog;