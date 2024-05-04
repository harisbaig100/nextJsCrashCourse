import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './dojo-logo.png'

const NavBar = () => {
    return (
        <nav>
            <Image src={Logo} alt="logo" width={70} height={100} placeholder='blur' quality={100} />
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
}

export default NavBar;
