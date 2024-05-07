import { Button } from '@material-tailwind/react';

function ButtonLoading({ loading, text, onClick, className }) {
  return (
    <Button
      className={className}
      loading={loading}
      onClick={onClick}
      type="submit"
    >
      {text}
    </Button>
  );
}
export default ButtonLoading;
