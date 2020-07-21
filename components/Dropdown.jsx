import React from 'react';
import { createPopper } from '@popperjs/core';

const Dropdown = ({ options, handleChange, size }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [selected, setSelected] = React.useState(
    options.find((opt) => opt.selected)?.value ?? options[0].value
  );
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <div className={size !== 'sm' ? 'w-full lg:w-64' : undefined}>
      <div className="relative inline-flex align-middle w-full">
        <button
          className={`w-full text-primary uppercase text-sm outline-none focus:outline-none mr-1 mb-1 border-primary border-b ${
            size === 'sm' ? 'p-2' : 'p-3'
          }`}
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <span className="flex flex-row justify-between align-middle">
            <span className={size === 'sm' ? 'mr-2' : ''}>{selected}</span>
            <i className="fas fa-angle-down"></i>
          </span>
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? 'block ' : 'hidden ') +
            'w-full bg-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
          }
          style={{ minWidth: '5rem' }}
        >
          {options.map((option) => (
            <button
              key={option.key}
              className={`text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-secondary hover:opacity-75 ${
                option.key === selected ? 'font-bold' : ''
              }`}
              onClick={() => {
                setSelected(option.value);
                closeDropdownPopover();
                handleChange(option.key);
              }}
            >
              {option.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
