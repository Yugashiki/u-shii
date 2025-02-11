import * as React from 'react';
import Button from '@yushii/u-ui/Button';
import ButtonGroup from '@yushii/u-ui/ButtonGroup';
import Box from '@yushii/u-ui/Box';

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
      <ButtonGroup orientation="vertical" aria-label="Vertical button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
