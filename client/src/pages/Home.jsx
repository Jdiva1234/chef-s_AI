import NavBar from '../components/navBar/navbar';
import InputBox from '../components/input/input';
import Footer from '../components/Footer/footer';
import axios from 'axios';
import { FoodCard } from '../components/Card/card';
import { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';

function HomePage() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <NavBar />
      <div className="container">
        <h1 className="flex justify-center ">
          Welcome to Chefs AI where cooking is made simple{' '}
        </h1>
        <br />
        <InputBox placeholder="Type your ingredients here..." />
        {/* <button onClick={apiCall}>Enter</button> */}

        <div className="grid grid-cols-3 gap-8">
          {imageData.map((image, i) => (
            <div key={i}>
              <FoodCard imageSrc={image.url} imageAlt={image.name} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
