import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ForumIcon from '@mui/icons-material/Forum';

export default function FloatingActionButtons() {
   
   
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" >
        <ForumIcon />
      </Fab>
      
    </Box>
  );
}