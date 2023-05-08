import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: "Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#e81f21"
        },
        background: {
            default: "#FFFFFF",
            paper: "#EDF4FF",
            accent: "#FFF6E9",
            gray: "#f6f7f8"
        },
        text: {
            primary: "#0b1d3c",
            secondary: "#9aa2ae",
            title: "#e81f21",
            accent: "#f4db4c"
        },
        light: {
            secondary: "#EDF4FF",
            accent: "rgba(211,47,47,0.03)",
        },
        colors: {
            accent: "#f4db4c",
            footer: "#000137"
        },
        icon: {
            accent: "#e81f21",
            secondary: "#f4db4c",
            accentBackground: "rgba(211,47,47,0.05)",
            secondaryBackground: "rgba(211,47,47,0.05)"
        },
        mode: "light",
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#e81f21"
        },
        background: {
            default: "#1b1a1a",
            paper: "#252729",
            secondary: "#EDF4FF",
            accent: "#FFF6E9",
            gray: "#252729"
        },
        text: {
            primary: "#fdfdfd",
            secondary: "rgba(255,255,255,0.55)",
            title: "#e81f21",
            accent: "#f4db4c"
        },
        light: {
            secondary: "rgba(232,31,33,0.3)",
            accent: "rgba(251,160,36,0.3)"
        },
        colors: {
            accent: "#f4db4c",
            footer: "#000137"
        },
        icon: {
            accent: "#f4db4c",
            secondary: "#e81f21",
            accentBackground: "rgba(244,219,76,0.05)",
            secondaryBackground: "rgba(232,31,33,0.05)"
        },
        mode: "dark",
    }
});

export const THEMES = {darkTheme, lightTheme};