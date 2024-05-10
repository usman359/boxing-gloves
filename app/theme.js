"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4DA2",
      light: "#1BB5E9",
    },
    secondary: {
      main: "#525252",
      light: "#ACACAC",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: {
      fontWeight: 500,
      fontSize: "48px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "35px",
    }, // Specify 'Nunito' as the font family with a fallback to sans-serif
    h3: {
      fontWeight: 600,
      fontSize: "30px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "26px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "20px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "17px",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "17px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "15px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
    },
    caption: {
      lineHeight: 1.5,
      fontSize: "12px",
    },
    overline: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: "10px",
    },
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
