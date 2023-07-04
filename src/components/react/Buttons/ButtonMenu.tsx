import { Bars3Icon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '@stores/ui';
import React from 'react'

export function ButtonMenu() {
  // const $isMenuOpen = useStore(isMenuOpen);

  return (
    <button
            type="button"
            className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
            onClick={() => isMenuOpen.set(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button> 
  )
}
