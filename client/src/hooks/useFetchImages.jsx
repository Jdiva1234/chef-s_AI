import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const useFetchImages = () => {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const promises = [];
        for (let i = 0; i < 6; i++) {
          promises.push(axios.get(`${backendUrl}/food-image`));
        }
        const responses = await Promise.all(promises);
        const images = responses.map((response) => {
          const imageUrl = response.data.image;
          let imageName = imageUrl.split('images/')[1].split('/')[0];
          imageName = imageName.charAt(0).toUpperCase() + imageName.slice(1);
          return { url: imageUrl, name: imageName };
        });
        setImageData(images);
      } catch (error) {
        toast.error('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { imageData, isLoading };
};

export default useFetchImages;
