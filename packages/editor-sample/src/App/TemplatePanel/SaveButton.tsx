import React, { useMemo } from 'react';

import { Save } from '@mui/icons-material';
import { Button } from '@mui/material';
import { renderToStaticMarkup } from '@usewaypoint/email-builder';

import { useDocument } from '../../documents/editor/EditorContext';

export default function SaveButton() {

  const document = useDocument();
  const code = useMemo(() => renderToStaticMarkup(document, { rootBlockId: 'root' }), [document]);

  const json = useMemo(() => {
    return JSON.stringify(document, null, '  ');
  }, [document]);

  const onClick = async () => {

    const event = new CustomEvent('saveHtml', {
      detail: {
        html: code,
        json: json,
      },
    });
    window.dispatchEvent(event);
  };

  return (
      <Button variant="contained" onClick={onClick} startIcon={<Save />}>
        <span>Save</span>
      </Button>
  );
}
