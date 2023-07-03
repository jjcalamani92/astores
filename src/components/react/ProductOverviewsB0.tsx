
import { StarIcon } from '@heroicons/react/20/solid'
import type { Product } from '@interfaces/product'
import { Swiper0 } from './Swiper0'
import ReactMarkdown from 'react-markdown'
import { isCartOpen } from '@stores/ui'
import { addCartItem, } from '@stores/cartStores'

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
interface Props {
  product: Product
}

export function ProductOverviewsB0(props: Props) {
  console.log('props', props)
  function addToCart(e: any) {
    e.preventDefault();
    isCartOpen.set(true);
    
    addCartItem({
      _id: props.product._id,
      name: props.product.data.name,
      slug: props.product.slug,
      price: props.product.data.price,
      quantity: 1,
      thumbnailUrl: props.product.data.images[0],
    });
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li className="text-sm">
              <a href={"#"} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {props.product.data.name}
              </a>
            </li>
          </ol>
        </nav>

        
        {/* <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:px-8'>
          <Swiper0 images={props.product.data.images} />
        </div> */}


        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <Swiper0 images={props.product.data.images} />
            
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.product.data.name}</h1>
                <div className="prose">
                  <ReactMarkdown children={props.product.data.description}  />
                  {/* {props.product.data.description} */}
                  </div>
            <p className="text-3xl tracking-tight text-gray-900"> Bs. {props.product.data.price}</p>

            

            <form className="mt-10" onSubmit={addToCart}>
              

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cris-accent px-8 py-3 text-base font-medium text-white hover:bg-cris-base focus:outline-none focus:ring-2 focus:ring-cris-dark focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            

            

            <div className="mt-10">
              <h2 className="font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <div className='prose'>

                  <ReactMarkdown children={props.product.data.details}  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
