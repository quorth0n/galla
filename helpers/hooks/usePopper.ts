import { useState } from 'react';
import { createPopper } from '@popperjs/core';

export default (btnRef, popoverRef) => {
  const [popoverShow, setDropdownPopoverShow] = useState(false);

  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: 'bottom',
    });
    setDropdownPopoverShow(true);
  };
  const closePopover = () => {
    setDropdownPopoverShow(false);
  };

  return [popoverShow, openPopover, closePopover];
};
