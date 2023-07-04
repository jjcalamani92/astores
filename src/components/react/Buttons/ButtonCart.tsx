
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { isCartOpen, isMenuOpen } from '@stores/ui'
export function ButtonCart() {
  const $isCartOpen = useStore(isCartOpen);
  return (
      <ShoppingBagIcon
        onClick={() => isCartOpen.set(!$isCartOpen)}
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer"
        aria-hidden="true"
      />
    
  )
}
