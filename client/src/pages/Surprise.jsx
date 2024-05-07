import SimpleCard from '../components/Card/simple-card';
import { useState, useEffect } from 'react';
import { supabase } from '../components/Authentication/supabaseClient';
import axios from 'axios';
import { Spinner } from '@material-tailwind/react';

async function getSurpriseRecipes(cuisine, diet) {
  try {
    const response = await axios.post('http://localhost:8080/surprise-me', {
      cuisine,
      diet,
    });
    console.log(response.data);
    if (!Array.isArray(response.data)) {
      console.error('Response data is not an array:', response.data);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching surprise recipes:', error);
    return [];
  }
}

async function getUserCuisine(email) {
  try {
    const { data, error } = await supabase
      .from('data')
      .select('cuisines')
      .eq('email', email)
      .single();

    if (error) {
      console.error('Error fetching user cuisine:', error);
      return null;
    }
    return data.cuisines;
  } catch (error) {
    console.error('Error fetching user cuisine:', error);
    return null;
  }
}

async function getUserDiet(email) {
  try {
    const { data, error } = await supabase
      .from('data')
      .select('diets')
      .eq('email', email)
      .single();

    if (error) {
      console.error('Error fetching user diet:', error);
      return null;
    }

    return data.diets;
  } catch (error) {
    console.error('Error fetching user diet:', error);
    return null;
  }
}

function SurprisePage({ session }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const email = session.user.email;

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when you start fetching
    if (recipes.length === 0) {
      Promise.all([getUserCuisine(email), getUserDiet(email)])
        .then(([cuisine, diet]) => getSurpriseRecipes(cuisine, diet))
        .then((recipes) => {
          setRecipes(recipes);
          setIsLoading(false); // Set isLoading to false when you finish fetching
        });
    }
  }, [email]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-24 w-24 text-lightGrey" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-center mt-8">
        Unleash Culinary Adventures, One Surprise at a Time!
      </h1>
      <div className="mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <SimpleCard
            key={index}
            nameOfMeal={recipe.name}
            description={`Delicious ${recipe.cuisine} dish`}
            ingredients={recipe.ingredients || []} // Default to empty array if undefined
            steps={recipe.instructions || []} // Default to empty array if undefined
            className="bg-white shadow rounded p-4 animate-fadeIn"
          />
        ))}
      </div>
    </div>
  );
}
export default SurprisePage;
