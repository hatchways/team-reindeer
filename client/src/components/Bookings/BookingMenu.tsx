import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRequest } from '../../context/useBookingContext';

interface Props {
  status: string;
  id: string;
}

const BookingMenu = ({ status, id }: Props): JSX.Element => {
  const { updateBookings } = useRequest();
  const [menuToggle, setmenuToggle] = useState<null | HTMLElement>(null);
  const [accepted, setAccepted] = useState<boolean>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (status === 'accepted') {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
    setmenuToggle(event.currentTarget);
  };

  const handleClose = () => {
    setmenuToggle(null);
  };
  const handleSubmit = (bookingStatus: string) => {
    updateBookings(bookingStatus, id);
    setmenuToggle(null);
  };
  return (
    <Box>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Menu id="request-menu" anchorEl={menuToggle} keepMounted open={Boolean(menuToggle)} onClose={handleClose}>
        <MenuItem disabled={accepted} onClick={() => handleSubmit('accepted')}>
          Accept
        </MenuItem>
        <MenuItem disabled={!accepted} onClick={() => handleSubmit('declined')}>
          Decline
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default BookingMenu;
