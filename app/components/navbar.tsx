'use client';
import { Gruppo } from 'next/font/google'

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400'
})

export const Navbar = () => {
  
    return (
        <h1 className={gruppo.className}>MAFIA</h1>
    );
  };