import React from 'react'

import Logo from './Logo'
import SearchInput from "./SearchInput";
import NavigationMenu from "./NavigationMenu";


const Navigation = () =>{
    return (
      <nav className="bg-white shadow-sm border-b-2">
        <div className="max-w-screen-lg mx-auto px-4 h-xxl flex flex-row items-center justify-between">
            <Logo />
            <SearchInput />
            <NavigationMenu profileImage="https://randomuser.me/api/portraits/men/68.jpg"/>
        </div>
      </nav>
    );
}

export default Navigation;