import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='d-flex bg-dark text-light justify-content-between align-items-center p-3'>
            <h1>Amazon</h1>
            <div className="d-flex gap-4">
                <Link className='text-light' to={'/'}>Anasayfa</Link>
                <Link className='text-light' to={'/urunler'}>Ürünler</Link>



            </div>


        </header>
    )
}

export default Header