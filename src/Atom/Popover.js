import * as React from 'react';
import Popover from '@mui/material/Popover';

import Box from "@mui/material/Box"
export default function BasicPopover({button,htmls}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <span aria-describedby={id} variant="contained" onClick={handleClick}>
       {button}
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
      >
        <Box sx={{ p: 5 }}>
        {htmls}
        </Box>
      </Popover>
    </div>
  );
}

