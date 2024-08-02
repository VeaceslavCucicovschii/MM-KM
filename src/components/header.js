import React, { useState } from 'react';
import { Button } from './button.js';

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
                    <img src={logo} className='h-fit'></img>
                </a>
                <div className='flex items-center gap-16'>
                    <ul className='flex font-krub font-light gap-7'>
                        <li><a href=''>Properties</a></li>
                        <li><a href=''>Service</a></li>
                        <li><a href=''>About Us</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                    <Button variant="secondary" text="get a consultation" />
                </div>
            </div>
        </nav >
    )
}