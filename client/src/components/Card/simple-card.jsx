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
        <Typography variant="paragraph" className="text-blue-gray-500">
          {description}
        </Typography>
        <Typography variant="lead" className="mt-4 mb-2 font-bold">
          Ingredients:
        </Typography>
        <ul className="list-disc ml-4">
          {Array.isArray(ingredients) ? (
            ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients available</li> // Fallback message
          )}
        </ul>
        <Typography variant="lead" className="mt-4 mb-2 font-bold">
          Cooking Steps:
        </Typography>
        <ol className="list-decimal ml-4">
          {Array.isArray(steps) ? (
            steps.map((step, index) => <li key={index}>{step}</li>)
          ) : (
            <li>No cooking steps available</li> // Fallback message
          )}
        </ol>
      </CardBody>
    </Card>
  );
}

export default SimpleCard;
