import { useState } from 'react';
import { supabase } from './supabaseClient';
import { Typography, Input } from '@material-tailwind/react';
import ButtonLoading from '../ButtonLoading/button-loading';
import toast from 'react-hot-toast';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) {
      toast.error(error.error_description || error.message);
    } else {
      toast('Good Job!', {
        icon: '👏',
      });
      toast('Check your email for the login link!');
    }
    setLoading(false);
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
          Sign in via magic link with your email below
        </Typography>

        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleLogin}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              onChange={handleEmailChange}
              className=" !border-t-white focus:!border-coral text-white"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div>
            <ButtonLoading
              text="Log In"
              loading={loading}
              onClick={handleLogin}
              className=" mt-4 w-full hover:bg-coral"
            ></ButtonLoading>
          </div>
        </form>
      </div>
    </div>
  );
}
