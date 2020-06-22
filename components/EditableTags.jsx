import React, { useState, useContext } from 'react';

import Tags from './Tags';
import OwnerContext from '../context/OwnerContext';
import useCognitoUser from '../helpers/hooks/useCognitoUser';

const EditableTags = ({ children, error, ...props }) => {
  const [isEditing, setEditing] = useState(false);
  const owner = useContext(OwnerContext);
  const user = useCognitoUser();

  const handleKeyDown = (event) => {
    const { key } = event;
    const keys = ['Escape', 'Tab', 'Enter'];
    if (keys.indexOf(key) > -1) {
      setEditing(false);
    }
  };

  return (
    <section {...props}>
      {isEditing && user?.username === owner ? (
        <>
          <div
            onBlur={(e) => {
              if (!e.relatedTarget) setEditing(false);
            }}
            onKeyDown={handleKeyDown}
          >
            {children}
          </div>
        </>
      ) : (
        <div
          className={`${error && 'border-2 border-red-600'} ${
            user?.username === owner && 'p-2 hover:shadow-outline'
          }`}
          onClick={() => setEditing(true)}
        >
          <Tags />
          <div className="hidden">{children}</div>
        </div>
      )}
      {error && (
        <div className="mb-2 text-red-600 font-semibold not-italic text-base">
          {error.message}
        </div>
      )}
    </section>
  );
};

export default React.memo(EditableTags);
