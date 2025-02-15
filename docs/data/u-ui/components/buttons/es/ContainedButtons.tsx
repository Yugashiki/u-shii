import * as React from 'react';
import Button from '@u-shii/u-ui/Button';
import Stack from '@u-shii/u-ui/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contenido</Button>
      <Button variant="contained" disabled>
        Deshabilitado
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Enlace
      </Button>
    </Stack>
  );
}
