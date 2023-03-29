import React from 'react';
import Button from '@mui/material/Button';

export default function Footer({ handleReset }) {
  return (
    <footer className="footer">
      <Button variant="contained" className='footer-btn' onClick={handleReset}>
        Main Menu
      </Button>
    </footer>
  );
}