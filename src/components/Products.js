import React from 'react'
import ProductItem from './ProductItem'

export default function Products() {
  return (
    <div className='border mt-4 rounded p-4'>
        <div className='row'>
            <div className='col-md-3'>
                <ProductItem name='Iphone 14s' description='Build Year 2024' />
            </div>
            <div className='col-md-3'>
                <ProductItem name='Iphone 15s' description='Build Year 2025' />
            </div>
            <div className='col-md-3'>
                <ProductItem name='Iphone 16s' description='Build Year 2026' />
            </div>
            <div className='col-md-3'>
                <ProductItem name='Iphone 17s' description='Build Year 207' />
            </div>
        </div>
    </div>
  )
}
