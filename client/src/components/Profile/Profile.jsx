import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { supabase } from '../../components/Authentication/supabaseClient';

export default function Profile({ session }) {
  const [cuisines, setCuisines] = useState([]);
  const [diets, setDiets] = useState([]);

  const email = session.user.email;

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from('data')
        .select('cuisines, diets')
        .eq('email', email);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setCuisines(JSON.parse(data[0].cuisines));
        setDiets(JSON.parse(data[0].diets));
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://poqbawcomcyedyigbydv.supabase.co/storage/v1/object/public/vault/cook-profile.mp4?t=2024-05-07T11%3A20%3A37.309Z"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative container mb-1 flex flex-col gap-6">
        <Typography
          as="h1"
          className="flex justify-center text-white font-bold text-4xl"
        >
          My Profile:
        </Typography>
        <Typography as="h2" className="text-2xl" color="white">
          Email: {email}
        </Typography>
        <Typography as="h2" className="text-2xl" color="white">
          Dietary Preferences: {diets.join(', ')}
        </Typography>
        <Typography as="h2" className="text-2xl" color="white">
          Favorite Cuisines: {cuisines.join(', ')}
        </Typography>
      </div>
    </div>
  );
}
