import * as React from 'react';
import IconButton from '@u-shii/u-ui/IconButton';
import Badge from '@u-shii/u-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';

function notificationsLabel(count) {
  if (count === 0) {
    return 'sin notificaciones';
  }
  if (count > 99) {
    return 'más de 99 notificaciones';
  }
  return `${count} notificaciones`;
}

export default function AccessibleBadges() {
  return (
    <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
  );
}
