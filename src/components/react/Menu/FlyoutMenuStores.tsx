import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '@nanostores/react'
import { isCartOpen, isMenuOpen } from '@stores/ui'
import type { Navigation } from '@interfaces/paths'
import { getTotalItems, shoppingCart } from '@stores/cartStores'
import type { Page } from '@interfaces/page'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  
  navigation: Navigation[]
  pages?: Page[]
}

export function FlyoutMenuStores(props:Props) {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {props.navigation.filter((category, i) => category.data.type === 'category').map((category, i) => (
                    <Popover key={i} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-cris-accent text-cris-accent'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.data.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className=" absolute inset-x-0 top-full text-sm text-gray-500">
                              
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white z-10">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-5 gap-x-8 gap-y-10 py-16">
                                    
                                    <div className="col-span-4 grid grid-cols-5 gap-x-8 gap-y-10 text-sm">
                                      {category.categories.map((category0, i) => (
                                        <div key={i}>
                                          <a href={category0.data.type === 'category' ? `/${category.slug}/${category0.slug}` : `/products/${category0._id}/1`} id={`${category0.slug}-heading`} className="font-medium text-gray-900 cursor-pointer">
                                            {category0.data.name}
                                          </a>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${category0.data.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {category0.categories.slice(0,4).map((category1,i) => (
                                              <li key={i} className="flex">
                                                <a href={category1.data.type === 'category' ? `/${category.slug}/${category0.slug}/${category1.slug}` : `/products/${category1._id}/1`} className="hover:text-gray-800">
                                                {category1.data.name}
                                                </a>
                                              </li>
                                            ))}
                                            {
                                              category0.categories.length !== 0 &&
                                              <li className="flex">
                                                <a href={`/${category.slug}/${category0.slug}`} className=" font-semibold hover:text-gray-800">
                                                ...View All
                                                </a>
                                              </li>
                                            }
                                          </ul> 
                                        </div>
                                      ))}
                                    </div>
                                    <div className=" grid grid-cols-1 gap-x-8">
                                      {/* {featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {props.pages?.filter(page => page.data.type !=='category').map((page, i) => (
                    <a
                      key={i}
                      href={`/${page.slug}`}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.data.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>
  )
}
