import { Checkbox } from '@material-tailwind/react';

export default function Checkboxes({ onChange, items }) {
  return (
    <>
      {items.map((item) => (
        <Checkbox
          key={item.value}
          color="light-green"
          label={item.label}
          value={item.value}
          labelProps={{ className: 'text-white' }}
          onChange={onChange}
        />
      ))}
    </>
  );
}
