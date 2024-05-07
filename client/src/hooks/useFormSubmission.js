import { useState } from 'react';
import { supabase } from '../components/Authentication/supabaseClient';
import toast from 'react-hot-toast';

export default function useFormSubmission(email, cuisines, diets) {
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSignUp = async () => {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) {
      toast.error('Error signing up:', error);
    } else {
      console.log(data);
      toast.success('User signed up');
      toast('Good Job!', {
        icon: '👏',
      });
      toast.success('Check your email for the login link!');
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSignUp();

    // Validate the form
    if (cuisines.length === 0 || diets.length === 0) {
      setIsFormValid(false);
      setLoading(false); // Stop loading if the form is invalid

      return;
    } else {
      setIsFormValid(true);
    }
    const { data, error } = await supabase.from('data').upsert({
      email,
      cuisines: JSON.stringify(cuisines),
      diets: JSON.stringify(diets),
    });

    if (error) {
      toast.error('Error saving preferences:', error);
    } else {
      toast.success('Preferences saved:', data);
    }
    setLoading(false);
  };

  return { loading, handleFormSubmit, isFormValid };
}
