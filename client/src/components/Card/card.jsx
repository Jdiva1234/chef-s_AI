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
import useImageSource from '../../hooks/use-image-src';

FoodCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

function FoodCard({ imageSrc, imageAlt }) {
  const { checkingImageValid, isImageBroken } = useImageSource(imageSrc);

  return (
    <Card className="w-full">
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
