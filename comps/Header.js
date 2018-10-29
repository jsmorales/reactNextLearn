import Link from 'next/link'
import React from "react";

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href={{pathname:'/'}}>
            <a style={linkStyle}> Home</a>
        </Link>
        <Link href={{pathname:'/contact'}}>
            <a style={linkStyle}> Contact</a>
        </Link>
        <Link href={{pathname:'/about'}}>
            <a style={linkStyle}> About</a>
        </Link>
    </div>
);

export default Header