import InputBox from '../components/input/input';
import axios from 'axios';
import FoodCard from '../components/Card/card';
import { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import SimpleCard from '../components/Card/simple-card';

function HomePage() {
  const [imageData, setImageData] = useState([]); //hold the data that is gotten from the api

  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState('');
  const [meals, setMeals] = useState([]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value); // Update the ingredients state with input value
  };

  const generateMeals = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/generate-food?ingredients=${ingredients}`
      );
      console.log('Response data:', response.data);
      setMeals(response.data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = [];
      for (let i = 0; i < 6; i++) {
        const response = await axios.get('http://localhost:8080/food-image');
        const imageUrl = response.data.image;
        let imageName = imageUrl.split('images/')[1].split('/')[0];
        imageName = imageName.charAt(0).toUpperCase() + imageName.slice(1);
        images.push({ url: imageUrl, name: imageName });
      }
      setImageData(images);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-24 w-24 text-lightGrey" />
      </div> // Render the Spinner component when isLoading is true
    );
  }
  return (
    <div className="container">
      <h1 className="flex justify-center ">
        Welcome to Chefs AI where cooking is made simple{' '}
      </h1>
      <br />
      <InputBox
        placeholder="Type your ingredients here..."
        value={ingredients}
        onChange={handleInputChange}
      />
      <button
        onClick={generateMeals}
        className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Meals
      </button>
      <div className="mt-20">
        {/* Adjust this value as needed */}
        <div className="grid grid-cols-3 gap-8">
          {meals.map((meal, i) => (
            <div key={i}>
              <SimpleCard
                nameOfMeal={meal.name}
                description="Enjoy this delicious meal prepared using your chosen ingredients." // pass an actual description if available
                ingredients={meal.steps} // pass actual ingredients if available
                steps={meal.steps}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <button onClick={apiCall}>Enter</button> */}
      <Typography variant="h3" className="m-8">
        Hungry? here are some pictures to wet your appetite....
      </Typography>

      <div className="grid grid-cols-3 gap-8">
        {imageData.map((image, i) => (
          <div key={i}>
            <FoodCard imageSrc={image.url} imageAlt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
