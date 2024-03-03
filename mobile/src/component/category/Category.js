import React from 'react'
import Products from '../Products/Products'
import './Category.css'
import { useParams } from 'react-router-dom'
import Fetch from '../hooks/Fetch'

export default function Category() {  
  const {id} = useParams()
  const {data} = Fetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  return (
    <div className='category-main-content'>
      <div className='layout'>
        <div className='category-title'>{data?.data?.[0].attributes?.categories?.data?.[0]?.attributes?.Title}</div>
        <Products product={data}/>
      </div>
    </div>
  )
}
