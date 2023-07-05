import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { isCartOpen, isMenuOpen } from '@stores/ui'
import { getTotalItems, shoppingCart } from '@stores/cartStores'
export function ButtonSearch() {
  const $isCartOpen = useStore(isCartOpen);
  return (
    <div className="flex">
      <a href="/search" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}
