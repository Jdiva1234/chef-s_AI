import { useState, useEffect } from 'react';

const useImageSource = (imageSrc) => {
  const [checkingImageValid, setCheckingImageValid] = useState(true);
  const [isImageBroken, setIsImageBroken] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      if (!imageSrc) {
        return;
      }

      try {
        const response = await fetch(imageSrc);
        if (!response.ok) {
          setIsImageBroken(true);
        }
        setCheckingImageValid(false);
      } catch (error) {
        setIsImageBroken(true);
        setCheckingImageValid(false);
      }
    };

    fetchImage();
  }, [imageSrc]);

  return { checkingImageValid, isImageBroken };
};

export default useImageSource;
