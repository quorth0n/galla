import { useFormContext } from 'react-hook-form';

export default ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};
