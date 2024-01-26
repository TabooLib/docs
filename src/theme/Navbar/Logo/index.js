import React from 'react';
import Logo from '@theme/Logo';

export default function NavbarLogo() {
    return (
        <div className="navbar__brand__wrapper">
            <a href="https://tabooproject.org" className="logo">
                <div className="navbar__brand">
                    <div className="light">Taboo</div>
                    <div>Lib</div>
                </div>
            </a>
        </div>
    );
}
