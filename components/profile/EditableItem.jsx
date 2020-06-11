import React from 'react';
import EditingContext from '../../context/profile/EditingContext';

const EditableItem = ({ name, value, placeholder, icon, textarea }, ref) => {
  const editing = React.useContext(EditingContext);
  return (
    <>
      {(value || editing) &&
        (textarea ? (
          <div className="mt-10 py-10 border-t border-primary text-center bg-secondary-soft">
            <h4 className="text-2xl font-semibold leading-normal mb-8 text-primary mb-2">
              About
            </h4>
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4 opacity-75">
                <p className="mb-4 text-lg leading-relaxed text-primary">
                  {editing ? (
                    <textarea
                      name={name}
                      id={name}
                      ref={ref}
                      placeholder={placeholder}
                      defaultValue={value}
                      className="w-full"
                      rows={10}
                    />
                  ) : (
                    value
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase">
            <i className={`fas ${icon} mr-2 text-lg text-primary`}></i>
            {editing ? (
              <input
                type="text"
                name={name}
                id={name}
                ref={ref}
                placeholder={placeholder}
                defaultValue={value}
              />
            ) : name === 'website' ? (
              <a href={value}>{value}</a>
            ) : (
              value
            )}
          </div>
        ))}
    </>
  );
};
export default React.memo(React.forwardRef(EditableItem));
