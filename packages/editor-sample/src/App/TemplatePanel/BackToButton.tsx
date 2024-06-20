import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import React from 'react';

export default function BackToButton() {

  return (
    <>
      <Button
        className={'backToButton'}
        onClick={() => {
          const event = new CustomEvent('backTo', {});
          window.dispatchEvent(event);
        }}
        variant="outlined">
        <ArrowBack /> <span>&nbsp; Back to Newsletter</span>
      </Button>
    </>
  );
}
