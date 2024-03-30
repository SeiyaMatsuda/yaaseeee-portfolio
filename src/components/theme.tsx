import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    background: {
      default: '#F1FADA',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    h4: {
      paddingTop: 30,
      color: "#2D9596",
      fontWeight: "bold",
      fontSize: "40px",
      // スマートフォンサイズでのスタイル調整
      '@media (max-width:600px)': {
        paddingTop: 15, // パディングを調整
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#265073',
          color: '#FFFFFF'
        },
      },
    },
  },
  // ブレークポイントの定義（必要に応じて）
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
