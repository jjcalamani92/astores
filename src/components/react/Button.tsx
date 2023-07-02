import { useStore } from '@nanostores/react';
import { isCartOpen, isProductQuickviewsOpen, isSlideOversOpen } from '@stores/ui';
import React from 'react'
import { setProduct } from '@stores/product'
import type { Product } from '@interfaces/product';
import { addCartItem } from '@stores/cartStores';

interface Props {
  title?: string
}

export function Button0({title = "Button"}: Props) {
  const $isSlideOversOpen = useStore(isSlideOversOpen);
  function handleClick() {
    isSlideOversOpen.set(!$isSlideOversOpen)
	}

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {title}
    </button>

  )
}
interface PropsButtonProduct {
  title?: string
  product: Product
}
export function ButtonProductCart({title = "Add to bag", product}: PropsButtonProduct) {
  const $isCartOpen = useStore(isCartOpen);
  function handleClick() {
    // isProductQuickviewsOpen.set(!$isProductQuickviewsOpen)
    isCartOpen.set(true);

    addCartItem({
      _id: product._id,
      name: product.data.name,
      slug: product.slug,
      price: 10,
      quantity: 1,
      thumbnailUrl: product.data.images[0],
    });

	}

  return (
    <button
      onClick={handleClick}
      className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"
      // className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {title}
    </button>

  )
}
export function ButtonProductView({title = "Quick View", product}: PropsButtonProduct) {
  const $isProductQuickviewsOpen = useStore(isProductQuickviewsOpen);
  function handleClick() {
    isProductQuickviewsOpen.set(!$isProductQuickviewsOpen)
    setProduct(product)

	}

  return (
    <button
      onClick={handleClick}
      className="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white"
      // className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {title}
    </button>

  )
}
