import React from "react";
import Popper from "popper.js";

const Dropdown = ({ options, handleChange, size }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "",
          enabled: false,
          options: {
            mainAxis: false,
            altAxis: true,
            rootBoundary: "document",
          },
        },
      ],
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <div className={size !== "sm" && "w-full lg:w-64"}>
      <div className="relative inline-flex align-middle w-full">
        <button
          className={`w-full text-primary font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 border-primary border-b-2 ${
            size === "sm" ? "p-2" : "p-3"
          }`}
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <span className="flex flex-row justify-between align-middle">
            <span className={size === "sm" && "mr-2"}>{selected}</span>
            <i className="fas fa-angle-down"></i>
          </span>
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "w-full bg-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "5rem" }}
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
  );
};

export default Dropdown;
