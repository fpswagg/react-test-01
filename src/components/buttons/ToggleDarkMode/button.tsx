import React, { CSSProperties } from 'react'

import { ThemeState } from "../../../app.tsx"

import "./style.css"

interface Props {
    id?: string;
    name?: string;
    className?: string;
    width?: string;
    height?: string;
    lightColor?: string;
    darkColor?: string;
    backPointer?: boolean;
    style?: CSSProperties;
    theme: ThemeState;
}

export default function ToggleDarkModeButton({ id, name, className, width, height, lightColor, darkColor, backPointer, style, theme }: Props) {
    const darkFlag = document.documentElement.classList.contains("dark")

    function setDark(element: HTMLInputElement, dark: boolean) {
        theme.setDark(dark)

        element.checked = dark

        if (dark)
            document.documentElement.classList.add('dark')

        else
            document.documentElement.classList.remove('dark')
    }

    return (
<div
    id={id}
    className={className}
    style={style}
>
    <input
        type='checkbox'
        name={name||'dark'}
        id='toggle-dark-1'
        onChange={(event) => {
            const element = event.target;
            
            setDark(element, element.checked);
        }}
        checked={darkFlag}
        value="dark"
    />
    <label
        htmlFor="toggle-dark-1"
        id="toggle-dark-1-label"
        style={{
            width: width||"32px",
            height: height||"20px"
        }}
        className={`${backPointer?'cursor-pointer':'cursor-default'} bg-${lightColor||"black"} border-${darkColor||"white"} dark:bg-${darkColor||"white"} dark:border-${lightColor||"black"}`}
    >
        <label
            htmlFor="toggle-dark-1-label"
            className={`cursor-pointer bg-${darkColor||"white"} dark:bg-${lightColor||"black"}`}
            onClick={(event) => document.getElementById('toggle-dark-1')?.click()}
        ></label>
    </label>
</div>
    )
}