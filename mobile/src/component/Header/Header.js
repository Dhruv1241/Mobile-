import React, { useState } from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom' 
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from '../Cart/Cart';
// import Search from './search/Search';
import {TbSearch} from 'react-icons/tb'
import { useContext } from 'react';
import { Contex } from '../UI/Contex';
// import Category from '../category/Category';
export default function Header() {
  const [showCart, setshowCart] = useState()
  const {cartQuantity} = useContext(Contex)
  return (
    <>
    <header>
        <div className='navdiv'>
          <ul className='ul'>
              <NavLink to='/' className='link'>Home</NavLink>
              <AiOutlineShoppingCart onClick={()=>setshowCart(true)} className='icon'/>
              {!! cartQuantity && <span className='span'>{cartQuantity}</span>}
              <TbSearch/>
          </ul>   
        </div>
    </header>
    {showCart && <Cart setshowcart={setshowCart}/>}
    {/* <Search /> */}
    </>
  )
}

