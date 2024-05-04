import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import CardPlaceholderSkeleton from '../CardPlaceholderSkeleton/card-placeholder-skeleton';
import useImageSource from '../../hooks/useImageSrc';
import { useState } from 'react';
import mealRecipes from './meal-reciepe';

FoodCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  description: PropTypes.string,
  ingredients: PropTypes.array,
  steps: PropTypes.array,
};

function FoodCard({ imageSrc, imageAlt }) {
  const { checkingImageValid, isImageBroken } = useImageSource(imageSrc);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const meal = mealRecipes.find((meal) => meal.name === imageAlt);

  return (
    <Card
      className="w-full cursor-pointer hover:shadow-2xl transition-shadow duration-200 hover:animate-vibrate"
      onClick={handleClick}
    >
      <CardHeader floated={false} className="h-80">
        {/* Checking if the image is valid and displaying a skeleton in that time */}
        {checkingImageValid && <CardPlaceholderSkeleton />}
        {/* If the image is not broken */}
        {!isImageBroken ? (
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full bg-no-repeat bg-contain"
            />
          </div>
        ) : (
          <CardPlaceholderSkeleton />
        )}
      </CardHeader>

      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {imageAlt}
        </Typography>
        {showDetails && meal && (
          <>
            <Typography variant="paragraph" className="text-blue-gray-500">
              {
                'Enjoy this delicious meal prepared using your chosen ingredients.'
              }
            </Typography>
            <Typography variant="lead" className="mt-4 mb-2 font-bold">
              Ingredients:
            </Typography>
            <ul className="list-disc ml-4">
              {meal.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <Typography variant="lead" className="mt-4 mb-2 font-bold">
              Cooking Steps:
            </Typography>
            <ol className="list-decimal ml-4">
              {meal.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}
      </CardBody>

      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
export default FoodCard;
