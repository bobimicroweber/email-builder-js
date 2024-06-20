import React, { useMemo } from 'react';

import { Save } from '@mui/icons-material';
import { Button } from '@mui/material';
import { renderToStaticMarkup } from '@usewaypoint/email-builder';

import { useDocument } from '../../documents/editor/EditorContext';

export default function SaveButton() {

  const document = useDocument();
  const code = useMemo(() => renderToStaticMarkup(document, { rootBlockId: 'root' }), [document]);
  const onClick = async () => {

    alert(code);

  };

  return (
      <Button variant="outlined" onClick={onClick} startIcon={<Save />}>
        <span>Save</span>
      </Button>
  );
}
