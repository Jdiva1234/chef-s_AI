import { useState } from 'react';
import { Typography, Input } from '@material-tailwind/react';
import ButtonLoading from '../ButtonLoading/button-loading';
import useFormSubmission from '../../hooks/useFormSubmission';
import Checkboxes from '../Checkboxes/CuisineCheckboxes';

const cuisineObject = [
  { label: 'African', value: 'African' },
  { label: 'Mediterranean', value: 'Mediterranean' },
  { label: 'Mexican', value: 'mexican' },
  { label: 'Chinese', value: 'chinese' },
];
const dietsObject = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten-free', value: 'gluten-free' },
  { label: 'None', value: 'none' },
  // Add more diets as needed
];

export default function Auth() {
  const [email, setEmail] = useState('');
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);

  const { loading, handleFormSubmit, isFormValid } = useFormSubmission(
    email,
    cuisines,
    diets
  );

  // Checkbox change handlers
  const handleCuisineChange = (event) => {
    if (event.target.checked) {
      setCuisines([...cuisines, event.target.value]);
    } else {
      setCuisines(cuisines.filter((cuisine) => cuisine !== event.target.value));
    }
  };

  const handleDietChange = (event) => {
    if (event.target.checked) {
      setDiets([...diets, event.target.value]);
    } else {
      setDiets(diets.filter((diet) => diet !== event.target.value));
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://poqbawcomcyedyigbydv.supabase.co/storage/v1/object/public/vault/heroVideoCooking.mp4?t=2024-05-03T19%3A25%3A06.726Z"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container">
        <Typography
          as="h1"
          className="flex justify-center text-white font-bold text-2xl"
        >
          Welcome to Chefs AI where cooking is made simple{' '}
        </Typography>

        <Typography color="white" className="mt-1 text-xl ">
          Before we work our magic, lets get your preferences 🙈{' '}
        </Typography>

        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleFormSubmit}
        >
          {!isFormValid && (
            <Typography color="red" className="mb-2">
              Please select at least one cuisine and one diet.
            </Typography>
          )}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Step 1: Choose Your Favorite Cuisines
            </Typography>
            <Checkboxes onChange={handleCuisineChange} items={cuisineObject} />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Step 2: Specify Your Dietary Preferences
            </Typography>
            <Checkboxes onChange={handleDietChange} items={dietsObject} />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>

            <Input
              required
              size="lg"
              placeholder="name@mail.com"
              onChange={handleEmailChange}
              className=" !border-t-white focus:!border-coral text-white"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <ButtonLoading
            text="Continue"
            loading={loading}
            className="mt-4 w-full hover:bg-coral"
          ></ButtonLoading>
        </form>
      </div>
    </div>
  );
}
