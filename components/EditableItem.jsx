import React from 'react';
import EditingContext from '../context/profile/EditingContext';

const EditableItem = ({ value, render }) => {
  const editing = React.useContext(EditingContext);

  return <>{(value || editing) && render(editing)}</>;
};

export default EditableItem;
