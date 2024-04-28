import { Card, CardBody, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

// Define PropTypes for additional props
SimpleCard.propTypes = {
  nameOfMeal: PropTypes.string.isRequired,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  steps: PropTypes.arrayOf(PropTypes.string),
};

function SimpleCard({ nameOfMeal, description, ingredients, steps }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {nameOfMeal}
        </Typography>
        <Typography variant="body2" className="text-blue-gray-500">
          {description}
        </Typography>
        <Typography variant="subtitle2" className="mt-4 mb-2 font-bold">
          Ingredients:
        </Typography>
        <ul className="list-disc ml-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Typography variant="subtitle2" className="mt-4 mb-2 font-bold">
          Cooking Steps:
        </Typography>
        <ol className="list-decimal ml-4">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </CardBody>
    </Card>
  );
}

export default SimpleCard;
