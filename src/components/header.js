import React, { useState } from 'react';
import { Button } from './button.js';
import { TextLink } from './textLink.js';

import logo from '../images/logo.png';

export function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    return (
        <nav className="my-12 flex justify-center">
            <div className="container flex justify-between">
                <a href=''>
                    <img src={logo} className='h-fit hover:opacity-90'></img>
                </a>
                <div className='flex items-center gap-16'>
                    <ul className='flex font-krub font-light gap-7'>
                        <li><TextLink text="Properties" /></li>
                        <li><TextLink text="Service" /></li>
                        <li><TextLink text="About Us" /></li>
                        <li><TextLink text="Contact" /></li>
                    </ul>
                    <Button variant="secondary" text="get a consultation" />
                </div>
            </div>
        </nav >
    )
}