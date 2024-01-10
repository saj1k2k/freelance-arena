import React, {FC, ReactElement} from 'react';
import Header from "src/shared/header/components/Header.tsx";
import Hero from "./Hero.tsx";

const Index: FC = (): ReactElement => {
    return (
        <div className='flex flex-col'>
            <Header navClass="navbar peer-checked:navbar-active fixed z-20 w-full border-b border-gray-100 bg-white/90 shadow-2xl shadow-gray-600/5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none"/>
            <Hero/>
        </div>
    );
};

export default Index;