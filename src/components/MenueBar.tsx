import React from "react";
import { AppBar, Toolbar, Button} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./scss/MenueBar.scss"

const navItems = [
  { name: 'Home', anchor: '#home' },
  { name: 'Career', anchor: '#career' },
  { name: 'Awards', anchor: '#awards' },
  { name: 'Publication', anchor: '#publication' },
  { name: 'Contact', anchor: '#contact' },
];


const MenueBar: React.FC = () => {
  return (
    <>
        <AppBar
          color="default"
          position="static"
          className="appBar" // クラス名を適用
          >
          <Toolbar className="toolBar">
            <Box className="box1">
              <Typography variant="h6" component="h1">
                Seiya Matsuda
              </Typography>
              <Typography variant="body2" component="h2">
                Datascientist/AI Engineer
              </Typography>
            </Box>
            <Box className="box2">
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton  component="a" href={item.anchor} className="navItemText">
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

    </>
  );
};

export default MenueBar;