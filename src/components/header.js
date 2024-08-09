import React, { useState } from 'react';
import { Button } from './button.js';
import { TextLink } from './textLink.js';

import logo from '../images/logo.png';

export function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    const ulStyle = 'flex font-krub font-light gap-7 duration-300 max-lg:absolute max-lg:flex-col max-lg:left-0'
    const navStyle = 'fixed w-full bg-white py-12 duration-300 flex justify-center'

    return (
        <nav className={isToggleOpen ? `${navStyle} pb-80` : `${navStyle}`}>
            <div className="container relative flex justify-between">
                <a href='#' className='flex items-center'>
                    <img src={logo} className='h-fit hover:opacity-90'></img>
                </a>
                <div className='flex items-center gap-16 max-lg:flex-col'>
                    <svg className='lg:hidden cursor-pointer' width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleToggleOpen}>
                        <line x1="0.666748" y1="1.5" x2="25.6667" y2="1.5" stroke="#565656" stroke-width="2" />
                        <line x1="0.666748" y1="9.5" x2="25.6667" y2="9.5" stroke="#565656" stroke-width="2" />
                        <line x1="0.666748" y1="17.5" x2="25.6667" y2="17.5" stroke="#565656" stroke-width="2" />
                    </svg>
                    <ul className={isToggleOpen ? `${ulStyle} max-lg:opacity-100 max-lg:top-24` : `${ulStyle} max-lg:opacity-0 max-lg:top-20`}>
                        <li><TextLink text="Properties" href="#" /></li>
                        <li><TextLink text="Service" href="#" /></li>
                        <li><TextLink text="About Us" href="#" /></li>
                        <li><TextLink text="Contact" href="#" /></li>
                    </ul>
                    <div className='max-lg:hidden'>
                        <Button variant="secondary" text="get a consultation" />
                    </div>
                </div>
            </div>
        </nav >
    )
}