import { useState, useEffect } from "react";

export function useFavourites() {
    const [favourite, setFavourite] = useState(() => {
    return JSON.parse(localStorage.getItem("saved_dogs")) || [];
});

  useEffect(() => {
    localStorage.setItem("saved_dogs", JSON.stringify(favourite));
  }, [favourite]);

  const isFavourite = (id) => favourite.some((a) => a.id === id);

  const addFavourite = (id, image, breed, location, gender, description) => {
    if (isFavourite(id)) return;

    const newDog = {
      id: id,
      img: image,
      title: breed,
      location: location,
      gender: gender,
      description: description,
      buttonPressed: true,
    };

    setFavourite((prev) => [...prev, newDog]);
  };


  const removeFavourite = (id) => {
    setFavourite((prev) => prev.filter((a) => a.id !== id));
  };

  return { favourite, addFavourite, removeFavourite, isFavourite };
}