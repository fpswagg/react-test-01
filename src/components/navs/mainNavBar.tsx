import React from "react";

import './mainNavBar.css'

export type SetAddressFunction = (address: string) => void;

export interface Props {
    address: string;
    setAddress: SetAddressFunction;
}

export function Link({content, address, currentAddress, setAddress}: {content: string, address: string, currentAddress: string, setAddress?: SetAddressFunction}) {
    const flag = (address===currentAddress);
    
    return (
<p onClick={(event) => (setAddress||function(){})(address)} className={`Link ${flag?"underline":""}`}>{content}</p>
    )
}

export default function NavBar({ address, setAddress }: Props) {
    return (
<div id='main-nav-bar'>
    <Link content="Home" address="home" currentAddress={address} setAddress={setAddress} />
    <Link content="Form" address="form" currentAddress={address} setAddress={setAddress} />
    <Link content="Settings" address="settings" currentAddress={address} setAddress={setAddress} />
</div>
    )
}