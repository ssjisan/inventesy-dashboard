import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Theme({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Open Sans",
    },
    palette: {
      text: {
        1000: "#212121",
        900: "#616161",
        800: "#424242",
        700: "#686868",
        600: "#757575",
        500: "#9E9E9E",
        400: "#BDBDBD",
        300: "#E0E0E0",
        200: "#EEEEEE",
        100: "#F5F5F5",
        50: "#FAFAFA",
      },
      primary: {
        light: "#8097AD",
        main: "#254E75",
        dark: "#0D3B66",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              boxShadow: "none",
            },
          },
          containedPrimary: {
            backgroundColor: "#254E75",
            color: "white",
            fontSize: "14px",
            borderRadius: "8px",
            textTransform: "none",
            height: "36px",
            fontWeight: 600,
            boxShadow: "0px 8px 16px rgba(37, 78, 117, 0.24)",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#254E75",
            },
          },
          ghostPrimary: {
            backgroundColor: "#DCE1E5",
            color: "#254E75",
            fontSize: "14px",
            borderRadius: "8px",
            textTransform: "none",
            height: "36px",
            fontWeight: 600,
            boxShadow: "0px 8px 16px rgba(220, 225, 229, 0.24)",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "#DCE1E5",
            },
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
