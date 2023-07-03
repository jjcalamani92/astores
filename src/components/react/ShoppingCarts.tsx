import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react';
import { isCartOpen } from '@stores/ui';
import { getTotalItems, getTotalPrice, removeFromCart, shoppingCart } from '@stores/cartStores';

interface Props {
  url:  string
}

export function ShoppingCarts({url}: Props) {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(shoppingCart);

  function removeToCart(item: any) {
    removeFromCart(item);
  }
  // console.log('$cartItems', $cartItems)
  const urls = $cartItems.map(data => ( `https://${url}/product/details/${data._id}/${data.slug}`))
  const urls2 = $cartItems.map(data => ( {name: data.name, slug:`https://${url}/product/details/${data._id}/${data.slug}`}))
  console.log('urls2', urls2)

  var enlaces = urls2.map(function(data, index) {
    // var numeroProducto = index + 1
    return "- _Nombre:_ " + data.name.replace('&','')+"," + encodeURIComponent("\n")+ "- _url:_ " + data.slug + encodeURIComponent("\n");
  });
  const mensaje = "¡Me interesan estos productos y quiero hacer un pedido!";

// Concatenar los URLs al enlace de WhatsApp
  const urlBase = "https://wa.me/59169869305?text=";
  const link = urlBase + encodeURIComponent(mensaje) + encodeURIComponent("\n\n") + enlaces.join(encodeURIComponent("\n")) + encodeURIComponent("\n\n") + `*Precio Total:* Bs. ${getTotalPrice()}`;


  // const remove = useStore(removeFromCart);

  // console.log('$cartItems2', $cartItems2)
  // console.log('$cartItems', $cartItems)
  return (
    <Transition.Root show={$isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => isCartOpen.set(!$isCartOpen)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => isCartOpen.set(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {$cartItems.map((product, i) => (
                              <li key={i} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.thumbnailUrl}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={"#"}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">0</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">color</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => removeToCart(product)}
                                        className="font-medium text-cris-accent hover:text-cris-base"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>

                            ))}

                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Bs. {getTotalPrice()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        
                        <a
                          href={link} target="_blank"
                          className="flex items-center justify-center rounded-md border border-transparent bg-cris-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cris-base"
                        >
                          Realizar Pedido por WhatsApp
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-cris-accent hover:text-cris-base"
                            onClick={() => isCartOpen.set(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
