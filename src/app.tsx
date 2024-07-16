import React, { useState, CSSProperties } from "react";

import ToggleDarkModeButton from './components/buttons/ToggleDarkMode'
import NavBar from "./components/navs/mainNavBar.tsx";

import Home from "./components/home";
import Form from "./components/form";
import Settings from "./components/settings";

export class ThemeState {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  
  constructor(dark: boolean, setDark: React.Dispatch<React.SetStateAction<boolean>>) {
    this.dark = dark
    this.setDark = (value = true) => setDark(value)
  }
}

export const darkToggleStyle = {
  position: "absolute",
  top: "10px",
  left: "calc(100% - 10px)",
  transform: "translateX(-100%)"
} as CSSProperties

export default function App() {
  (document.getElementsByTagName("body").item(0)!).className = "bg-white text-black dark:bg-black dark:text-white"
  
  const [dark, setDark] = useState(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
  const [address, setAddress] = useState("home")

  if (dark)
    document.documentElement.classList.add("dark")
  else
    document.documentElement.classList.remove("dark")

  return (
    <div className="app">
      <h1 className="font-bold text-5xl cursor-default select-none mt-8">Test 01</h1>
      
      <center>
        <ToggleDarkModeButton backPointer={true} style={darkToggleStyle} theme={new ThemeState(dark, setDark)}/>
      </center>

      <NavBar address={address} setAddress={setAddress} />

      { (address==="home") && (<Home />) }
      { (address==="form") && (<Form />) }
      { (address==="settings") && (<Settings />) }

    </div>
  );
}
