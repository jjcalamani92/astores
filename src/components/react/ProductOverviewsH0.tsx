
import { StarIcon } from '@heroicons/react/20/solid'
import type { Product } from '@interfaces/product'
import { Swiper0 } from './Swiper0'
import ReactMarkdown from 'react-markdown'
import { isCartOpen } from '@stores/ui'
import { addCartItem, } from '@stores/cartStores'
const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' },
]
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
interface Props {
  product: Product
}

export function ProductOverviewsH0(props: Props) {
  
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
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
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
              
            
            <p className="text-3xl tracking-tight text-gray-900">{props.product.data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-cris-accent hover:text-cris-primary">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10" onSubmit={addToCart}>
              

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cris-accent px-8 py-3 text-base font-medium text-white hover:bg-cris-primary focus:outline-none focus:ring-2 focus:ring-cris-dark focus:ring-offset-2"
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
