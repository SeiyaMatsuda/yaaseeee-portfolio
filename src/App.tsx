import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenueBar from './components/MenueBar';
import YaaseeeAvatar from './components/MyAvatar';
import PublishedPaperList from './components/Article'
import AwardsList from './components/Awards';
import Carrer from './components/Carrer';
import ContactCard from './components/Contact';
import theme from './components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* これを追加 */}
        <div className="App">
          <div id="contact">
            <MenueBar />
          </div>
          <div id="home">
            <YaaseeeAvatar />
          </div>
          <div id="career">
            <Carrer />
          </div>
          <div id="awards">
            <AwardsList />
          </div>
          <div id="publication">
            <PublishedPaperList />
          </div>
          <div id="contact">
            <ContactCard />
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
