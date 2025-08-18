import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { createTheme } from "@mui/material/styles";

//default color mode config
export const config: ThemeConfig = {
  //initialColorMode: "dark",
  initialColorMode: "light",
  useSystemColorMode: false,
};




export const Theme = extendTheme({
  config,
  fonts: {
    heading: "Roboto, sans-serif",
    // body: "Roboto, sans-serif",
    body: `Roboto,Cordia New,"Microsoft Sans Serif",Utsaah,Devanagari MT,Nirmala UI,Latha,InaiMathi,Gautami,Telugu Sangam MN,Tunga,Kannada Sangam MN,Kartika,Malayalam Sangam MN,Shruti,Gujarati MT,Gujarati Sangam MN,Vrinda,Bangla Sangam MN,Meiryo UI Reg,メイリオ Reg,MS UI Gothic Reg,Hiragino Kaku Gothic Reg,ヒラギノ角ゴ Pro W3 Reg,Microsoft YaHei,微软雅黑,Hiragino Sans GB,Microsoft JhengHei,微軟正黑體,Malgun Gothic,맑은 고딕,Gulim,AppleGothic,Apple LiGothic,LiHei Pro,Osaka,STHeiti,华文黑体,STXihei,华文细黑,SimHei,黑体,Arial Unicode MS,Arial,sans-serif`,
  },
  colors: {
    black: "#000000",
    white: "#ffffff",
    customGreen: "#00A36C",
    customBtnColor: "#261500",
    blue: {
      100: "#d9f5fd",
      200: "#94dcf7",
      300: "#5cc1ee",
      400: "#31a2e3",
      500: "#1282d6",
      600: "#0672cb",
      700: "#0063b8",
      800: "#00468b",
      900: "#002a58",
    },
    lightBlue: {
      100: "#daf5fd",
      200: "#97dcf4",
      300: "#61c1eb",
      400: "#36a2e0",
      500: "#1885c3",
      600: "#0d76b2",
      700: "#0468a1",
      800: "#004a77",
      900: "#002d4b",
    },
    red: {
      100: "#ffecee",
      200: "#ffc3c9",
      300: "#ff99a1",
      400: "#fe6873",
      500: "#e4424d",
      600: "#d0353f",
      700: "#bb2a33",
      800: "#8c161f",
      900: "#590a0f",
    },
    green: {
      100: "#e9f5ce",
      200: "#c0dd78",
      300: "#9bc438",
      400: "#7aa809",
      500: "#5d8c00",
      600: "#4f7d00",
      700: "#436f00",
      800: "#2c5000",
      900: "#193100",
    },
    orange: {
      100: "#ffeed2",
      200: "#fec97a",
      300: "#f8a433",
      400: "#e67f01",
      500: "#c96100",
      600: "#b85200",
      700: "#a64600",
      800: "#7d2e00",
      900: "#4f1a00",
    },
    purple: {
      100: "#fbebff",
      200: "#ecc4ff",
      300: "#db9eff",
      400: "#c47af4",
      500: "#a95adc",
      600: "#994ccc",
      700: "#8a3fba",
      800: "#66278f",
      900: "#40155c",
    },
  },

  textStyles: {
    display1: {
      fontSize: ["56px", "72px"],
      fontWeight: "light",
      lineHeight: ["121%", "122%"],
      letterSpacing: ["-1.5%", "-0.5%"],
    },
    display2: {
      fontSize: ["48px", "64px"],
      fontWeight: "light",
      lineHeight: ["117%", "119%"],
      letterSpacing: ["normal", "-1%"],
    },
    display3: {
      fontSize: ["40px", "56px"],
      fontWeight: "light",
      lineHeight: ["120%", "121%"],
      letterSpacing: ["normal", "-0.5%"],
    },
    h1: {
      fontSize: ["40px", "48px"],
      fontWeight: "light",
      lineHeight: ["120%", "117%"],
      letterSpacing: "normal",
    },
    h2: {
      fontSize: ["30px", "38px"],
      fontWeight: "light",
      lineHeight: ["125%", "120%"],
      letterSpacing: "normal",
    },
    h3: {
      fontSize: ["24px", "28px"],
      fontWeight: "normal",
      lineHeight: ["133%", "125%"],
      letterSpacing: "normal",
    },
    h4: {
      fontSize: ["20px", "24px"],
      fontWeight: "normal",
      lineHeight: ["160%", "133%"],
      letterSpacing: "normal",
    },
    h5: {
      fontSize: ["16px", "18px"],
      fontWeight: "normal",
      lineHeight: ["150%", "150%"],
      letterSpacing: ["normal", "0.5%"],
    },
    h6: {
      fontSize: ["14px", "16px"],
      fontWeight: "normal",
      lineHeight: ["150%", "150%"],
      letterSpacing: ["0.5%", "0.5%"],
    },
    text: {
      fontSize: ["14px", "16px"],
      fontWeight: "light",
    },
    text_sm: {
      fontSize: ["15px"],
      fontWeight: "normal",
    },
    text_label: {
      fontSize: ["14px"],
      fontWeight: "normal",
    },
    caption: {
      fontSize: "12px",
    },
  },
});
