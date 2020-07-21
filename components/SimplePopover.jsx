import React from 'react';

const SimplePopover = ({ open, items, handleClick }, ref) => (
  <div
    ref={ref}
    className={
      (open ? 'block' : 'hidden') +
      ' bg-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
    }
    style={{ minWidth: '5rem' }}
  >
    {items.map((item) => (
      <button
        key={item}
        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-secondary"
        onClick={() => handleClick(item)}
      >
        {item}
      </button>
    ))}
  </div>
);

export default React.memo(React.forwardRef(SimplePopover));
