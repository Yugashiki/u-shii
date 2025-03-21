import * as React from 'react';
import Button from '@u_ui/u-ui/Button';
import ButtonGroup from '@u_ui/u-ui/ButtonGroup';
import Box from '@u_ui/u-ui/Box';

const buttons = [
  <Button key="uno">Uno</Button>,
  <Button key="dos">Dos</Button>,
  <Button key="tres">Tres</Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup orientation="vertical" aria-label="Grupo de botones verticales">
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Grupo de botones verticales"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Grupo de botones verticales"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
