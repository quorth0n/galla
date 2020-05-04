import React from "react";
import Popper from "popper.js";

const Dropdown = ({ options, handleChange }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="px-4 w-full lg:w-64">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="w-full text-primary font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 border-primary border-b-2 py-3"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <span className="flex flex-row justify-between">
                <span>{selected}</span>
                <i className="fas fa-angle-down"></i>
              </span>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "w-full bg-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              {options.map((option) => (
                <button
                  className={`text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-secondary hover:opacity-75 ${
                    option === selected ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSelected(option);
                    closeDropdownPopover();
                    handleChange(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
