import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import OwnerContext from '../context/OwnerContext';
import useCognitoUser from '../helpers/hooks/useCognitoUser';

const Editable = ({ text, type, children, error, ...props }) => {
  const [isEditing, setEditing] = useState(false);
  const owner = useContext(OwnerContext);
  const [user] = useCognitoUser();

  const handleKeyDown = (event) => {
    const { key } = event;
    const textKeys = ['Escape', 'Tab'];
    const textareaKeys = [...textKeys, 'Enter'];
    if (
      (type === 'textarea' && textKeys.indexOf(key) > -1) ||
      (type !== 'textarea' && textareaKeys.indexOf(key) > -1)
    ) {
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
          {type === 'textarea' && (
            <p className="opacity-75">
              Use{' '}
              <a
                className="font-semibold"
                rel="noopener noreferrer"
                target="_blank"
                href="https://commonmark.org/help/"
              >
                Markdown
              </a>{' '}
              for formatting
            </p>
          )}
        </>
      ) : (
        <div
          className={`flex space-x-4 ${error && 'border-2 border-red-600'} ${
            user?.username === owner && 'p-2 hover:shadow-outline'
          }`}
          onClick={() => setEditing(true)}
        >
          <span className={!text ? 'text-gray-500' : ''}>
            {type === 'textarea' ? (
              <ReactMarkdown
                source={text || 'Editable content'}
                className="opacity-75"
              />
            ) : (
              text || 'Editable content'
            )}
          </span>
          <div className="hidden">{children}</div>
          {user?.username === owner && (
            <i className="fas fa-edit opacity-75 text-base" />
          )}
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

export default React.memo(Editable);
