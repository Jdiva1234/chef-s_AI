import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const useGenerateMeals = (ingredients) => {
  const [meals, setMeals] = useState([]);
  const [isGeneratingMeals, setIsGeneratingMeals] = useState(false);

  const generateMeals = async () => {
    setIsGeneratingMeals(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/generate-food?ingredients=${ingredients}`
      );
      setMeals(response.data);
    } catch (error) {
      toast.error('Failed to generate meals');
    } finally {
      setIsGeneratingMeals(false);
    }
  };

  return { generateMeals, meals, isGeneratingMeals };
};

export default useGenerateMeals;
