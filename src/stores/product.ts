import type { Product } from '@interfaces/product'
import { atom } from 'nanostores'

export const $product = atom<Product | undefined>()

export function setProduct(product: Product) {
  $product.set(product);
}