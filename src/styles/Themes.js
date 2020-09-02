import { lighten, darken } from "polished" ;

const nord = {
  //Polar Night
  nord0: "#2e3440",
  nord1: "#3b4252",
  nord2: "#434c5e",
  nord3: "#4c566a",
  //Snow Storm
  nord4: "#d8dee9",
  nord5: "#e5e9f0",
  nord6: "#eceff4",
  //Frost
  nord7: "#8fbcbb",
  nord8: "#88c0d0",
  nord9: "#81a1c1",
  nord10: "#5e81ac",
  //Aurora
  nord11: "#bf616a",
  nord12: "#d08770",
  nord13: "#ebcb8b",
  nord14: "#a3be8c",
  nord15: "#b48ead"
};

const Themes = {
  light : {
    name: 'light',
    bg: nord.nord6,
    sidebarBg: nord.nord4,
    highlightBg: lighten(0.1, nord.nord6),
    selected: nord.nord8,
    text: nord.nord0,
    link: nord.nord10,
    comment: nord.nord4,
    date: nord.nord10
  },
  dark : {
    name: 'dark',
    bg: nord.nord0,
    sidebarBg: darken(0.05, nord.nord0),
    highlightBg: nord.nord1,
    selected: nord.nord10,
    text: nord.nord6,
    link: nord.nord8,
    comment: nord.nord3,
    date: nord.nord8
  }
}
 
export default Themes ;
