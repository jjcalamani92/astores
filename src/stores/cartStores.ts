import { atom, map } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  _id: string;
  slug: string
  name: string
  thumbnailUrl: string
  price: number
  quantity: number
}

// export const locale = persistentAtom('locale', 'en')

// export const cartItems = map<Record<string, CartItem>>({});
export const shoppingCart = persistentAtom<CartItem[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

type ItemDisplayInfo = Pick<CartItem, '_id' | 'slug' |'name' | 'thumbnailUrl'| 'price'| 'quantity'>;


export function addCartItem(item: ItemDisplayInfo) {
  const cartItems  = shoppingCart.get();
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem._id === item._id
  );
  if (existingItemIndex !== -1) {
    const existingItem = cartItems[existingItemIndex];
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    };
    updateCart(existingItemIndex, updatedItem);
  } else {
    
    shoppingCart.set([...shoppingCart.get(), item])
  }

  
}

export const removeFromCart = (item: CartItem) => {
  const cartItems  = shoppingCart.get();
  const removeItems = cartItems.filter(data => data._id !==item._id)
  shoppingCart.set(removeItems)
  
};

export const updateCart = (itemIndex: number, updatedItem: CartItem) => {
  const cartItems  = shoppingCart.get();

  const newCartItems = [...cartItems];
  newCartItems.splice(itemIndex, 1, updatedItem);
  shoppingCart.set(newCartItems)

  // setCartItems(newCartItems);
};

export const clearCart = () => {
  shoppingCart.set([])

};

export function getTotalItems() {
  const cartItems  = shoppingCart.get();

  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const getTotalPrice = () => {
  const cartItems  = shoppingCart.get();

  return cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};