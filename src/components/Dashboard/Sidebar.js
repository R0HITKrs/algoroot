import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Sidebar({ activePage }) {
  return (
    <div className="Sidebar">
      <List>
        <ListItem button selected={activePage === 'details'}>
          <ListItemText primary="Details" />
        </ListItem>
      </List>
    </div>
  );
}