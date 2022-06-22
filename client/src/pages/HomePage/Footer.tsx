import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';


export default function Footer() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <p><h4>&copy; Pratistha Mishra, 2022 </h4></p>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
