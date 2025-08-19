import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { createRoot } from 'react-dom/client';
import {AlertColor} from "@mui/material/Alert/Alert";

const ErrorAlert = (message: string, type: AlertColor = 'error') => {
  const AlertContainer = () => (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
    >
      <Alert severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );

  // Create a new div element and append it to the body
  const div = document.createElement('div');
  document.body.appendChild(div);

  // Use createRoot for rendering
  const root = createRoot(div);
  root.render(<AlertContainer />);

  // Clean up the element after the Snackbar auto-hides
  setTimeout(() => {
    root.unmount();
    document.body.removeChild(div);
  }, 3800); // Give a buffer time after autoHideDuration
};

export default ErrorAlert;
