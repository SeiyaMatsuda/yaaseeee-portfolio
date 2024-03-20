import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

type ContactDataProps = {
    email: string;
    phone: string;
  };

const ContactCard: React.FC<ContactDataProps> = (props) => {
  return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
        <h2>Contact</h2>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Phone:</strong> {props.phone}</p>
        </div>
  );
}

export default ContactCard;