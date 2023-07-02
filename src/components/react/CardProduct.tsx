import type { Product } from '@interfaces/product'
import React from 'react'
import { ButtonProduct0 } from './Button'


interface Props {
  product: Product
}

export function CardProduct({ product }: Props) {

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
        <p className="text-xs leading-3 text-gray-800">New</p>
      </div>
      <div className="relative group">
        <div
          className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"
        >
        </div>
        <img
          className="w-full"
          src={product.data.thumbnailUrl}
          alt="A girl Posing Image"
        />
        <div
          className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100"
        >
          <ButtonProduct0 product={product} />

          <button
            className="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white"
          >Quick View
          </button>
        </div>
      </div>
      <p
        className="font-normal dark:text-white  leading-5 text-gray-800 md:mt-6 mt-4"
      >
        {product.data.name}
      </p>
      <p
        className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4"
      >
        $1550
      </p>
      <p
        className="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4"
      >
        2 colours
      </p>
    </div>
  )
}
