import React from 'react';

import EditingContext from '../../context/profile/EditingContext';

const EditableItem = ({ name, ref, style }) => {
  const editing = React.useContext(EditingContext);
  return (
    <>
      {editing && (
        <>
          <input
            type="file"
            name={name}
            id={name}
            className="file-hidden"
            ref={ref}
          />
          <label htmlFor="avatar" className="absolute text-3xl" style={style}>
            <a className="fas fa-pen-square" />
          </label>
        </>
      )}
    </>
  );
};
export default EditableItem;
