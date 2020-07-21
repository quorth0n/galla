import React from 'react';
import { useToasts } from 'react-toast-notifications';

import ConnectForm from '../ConnectForm';
import EditingContext from '../../context/profile/EditingContext';

const UploadIcon = ({ name, style, maxSize, minDim, onChange }) => {
  const [key, setKey] = React.useState(0);
  const editing = React.useContext(EditingContext);
  const { addToast } = useToasts();
  const handleChange = (e) => {
    if (e.target.files[0].size > (maxSize ?? 1 * 1000 * 1000)) {
      addToast('Max file size is 1 MB', { appearance: 'error' });
      setKey(key + 1);
      return;
    }
    const url = window.URL.createObjectURL(e.target.files[0]); // No need to revoke because the URL points locally
    const img = new Image();
    const minWidth = minDim?.[0] ?? 100;
    const minHeight = minDim?.[1] ?? 100;
    img.onload = () => {
      if (img.width < minWidth || img.height < minHeight) {
        addToast(`Must be at least ${minWidth} x ${minHeight}`, {
          appearance: 'error',
        });
        setKey(key + 1);
        return;
      }
      onChange(url);
    };
    img.src = url;
  };
  return (
    <>
      {editing && (
        <ConnectForm>
          {({ register }) => (
            <>
              <input
                type="file"
                key={key}
                name={name}
                id={name}
                className="file-hidden"
                ref={register}
                onChange={handleChange}
              />
              <label htmlFor={name} className="absolute text-3xl" style={style}>
                <a className="fas fa-pen-square" />
              </label>
            </>
          )}
        </ConnectForm>
      )}
    </>
  );
};
export default React.memo(UploadIcon);
