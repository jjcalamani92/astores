
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { getTotalItems, itemsCart, shoppingCart } from '@stores/cartStores';
import { isCartOpen, isMenuOpen } from '@stores/ui'
export function CountCart() {
  const total = useStore(itemsCart)
  return (
    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{total}</span>
    
  )
}
