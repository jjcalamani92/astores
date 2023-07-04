
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { isBannerOpen, isCartOpen, isMenuOpen } from '@stores/ui'
export function ButtonClose() {
  const $isBannerOpen = useStore(isBannerOpen);
  console.log('isBannerOpen', $isBannerOpen)
  return (
      <XMarkIcon onClick={() => isBannerOpen.set(false)} className="h-5 w-5 text-gray-900" aria-hidden="true" />
      // <ShoppingBagIcon
      //   onClick={() => isCartOpen.set(!$isCartOpen)}
      //   className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 cursor-pointer"
      //   aria-hidden="true"
      // />
    
  )
}
