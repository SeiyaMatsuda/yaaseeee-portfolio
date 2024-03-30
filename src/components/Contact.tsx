import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const email: string = "yaa.seeee1223@gmail.com";

const ContactCard: React.FC = () => {
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Contact</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};

export default ContactCard;
