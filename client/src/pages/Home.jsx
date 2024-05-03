import InputBox from '../components/input/input';
import FoodCard from '../components/Card/card';
import { useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import SimpleCard from '../components/Card/simple-card';
import ButtonLoading from '../components/ButtonLoading/button-loading';
import useFetchImages from '../hooks/useFetchImages';
import useGenerateMeals from '../hooks/useGenerateMeals';

// TODO:Fix refresh bug
function HomePage() {
  const { imageData, isLoading } = useFetchImages();
  const [ingredients, setIngredients] = useState('');
  const { generateMeals, meals, isGeneratingMeals } =
    useGenerateMeals(ingredients);

  const handleInputChange = (event) => {
    setIngredients(event.target.value); // Update the ingredients state with input value
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-24 w-24 text-lightGrey" />
      </div> // Render the Spinner component when isLoading is true
    );
  }
  return (
    <div className="container">
      <Typography as="h1" className="flex justify-center">
        Welcome to Chefs AI where cooking is made simple{' '}
      </Typography>
      <br />
      <InputBox
        placeholder="Type your ingredients here..."
        value={ingredients}
        onChange={handleInputChange}
      />
      <div className="mt-8">
        <ButtonLoading
          text="Generate Meals"
          loading={isGeneratingMeals}
          onClick={generateMeals}
        ></ButtonLoading>
      </div>

      <div className="mt-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
      {meals.length === 0 && (
        <>
          <Typography as="h3" className="mb-2">
            Hungry? here are some pictures to wet your appetite....
          </Typography>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {imageData.map((image, i) => (
              <div key={i}>
                <FoodCard imageSrc={image.url} imageAlt={image.name} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default HomePage;
