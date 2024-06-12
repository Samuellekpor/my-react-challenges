import { useEffect, useState } from "react";

export default function DogPics() {
  const [dogPic, setDogPic] = useState('');

  function getDogPic() {
    
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => response.json())
      .then(data => {
        const dog = data.message;
        setDogPic(dog);
      });
    
    return;
  }

  useEffect(() => {
    getDogPic()
  }, []);
  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src={dogPic} alt=""/>
      <button onClick={()=>getDogPic()}>🐶</button>
    </div>
  );
}
