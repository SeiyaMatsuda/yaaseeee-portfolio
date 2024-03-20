import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenueBar from './components/MenueBar';
import YaaseeeAvatar from './components/MyAvatar';
import PublishedPaperList from './components/Article'
import AwardsList from './components/Awards';
import HistoryTimeline from './components/Timline';
import ContactCard from './components/Contact';
import { createTheme , ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    background: {
      default: '#F1FADA',
    },
    text: { primary: '#333333' },
  },
  typography: {
    h4: {
      paddingTop: 30, 
      color: "#2D9596",
      fontWeight: "bold",
      fontSize: "40px"
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
      root: {
        // ここでAppBarのスタイルをカスタマイズできます
        backgroundColor: '#265073', // 例: AppBarの背景色を上書き
        color: '#FFFFFF'
      }, 
    }
  }
  }
});

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
            <HistoryTimeline />
          </div>
          <div id="awards">
            <AwardsList />
          </div>
          <div id="publication">
            <PublishedPaperList />
          </div>
          <div id="contact">
            <ContactCard email="yaa.seeee1223@gmail.com" phone="080-8384-7071" />
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
