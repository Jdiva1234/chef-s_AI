// Import the useState hook from the 'react' library
import { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

// Import custom components
import InputBox from '../components/input/input';
import ButtonLoading from '../components/ButtonLoading/button-loading';
import { supabase } from '../components/Authentication/supabaseClient';
import toast from 'react-hot-toast';

// Import the Typography component from the '@material-tailwind/react' library
// import { Typography } from '@material-tailwind/react';

// Define the LoginPage component
function LoginPage() {
  // Define state variables using the useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Event handler for Name input change
  const handleNameChange = (event) => {
    setPassword(event.target.value);
  };
  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for login form submission
  const handleLogin = async (event) => {
    toast('handle login function');

    event.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) alert(error.error_description || error.message);
    else {
      toast('check your email for the login link!');
    }
    // Call your login function here...
    setIsLoading(false);
  };

  // Render the LoginPage component
  return (
    <div className="relative h-screen items-center justify-center flex">
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
          Nice to meet you! Enter your details to register.
        </Typography>
        <br />
        {/* <form onSubmit={handleLogin}>
          <InputBox
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputBox
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="mt-8">
            <ButtonLoading
              text="Log In"
              loading={isLoading}
              onClick={handleLogin}
            ></ButtonLoading>
          </div>
        </form> */}
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              onChange={handleNameChange}
              className=" !border-t-white focus:!border-coral text-white"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
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

          <ButtonLoading
            text="Log In"
            loading={isLoading}
            onClick={handleLogin}
            className=" mt-4 w-full hover:bg-coral"
          ></ButtonLoading>
          <Typography
            color="gray"
            className="mt-4 text-center text-white font-normal"
          >
            Already have an account?{' '}
            <a href="#" className="font-medium text-white">
              Sign In
            </a>
          </Typography>
        </form>
      </div>
    </div>
  );
}

// Export the LoginPage component as the default export
export default LoginPage;
