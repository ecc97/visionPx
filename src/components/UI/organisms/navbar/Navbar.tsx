import React from 'react'
import Link from 'next/link'
import Button from '../../atoms/button/Button'
import './navbar.sass'

interface NavbarProps {
    className?: string
}

function Navbar({className}: NavbarProps) {
  return (
    <nav className={`navbar ${className}`}>
        <Link href={'/'}>
            <h1 className='navbar__heading'>visionPX</h1>
        </Link>
        <div className='navbar__btn-container'>
            <Button color='primary'>Comienza a buscar</Button>
        </div>
    </nav>
  )
}

export default Navbar
