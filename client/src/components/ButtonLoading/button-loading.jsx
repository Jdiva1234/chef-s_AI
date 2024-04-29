import { Button } from '@material-tailwind/react';

function ButtonLoading({ loading, text, onClick }) {
  return (
    <Button className="rounded-full" loading={loading} onClick={onClick}>
      {text}
    </Button>
  );
}
export default ButtonLoading;
