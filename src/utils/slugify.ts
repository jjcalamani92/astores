import type { Product } from "@interfaces/product";
import { slug as slugger } from "github-slugger";
// import type { BlogFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (product: Product) =>
  product.slug ? slugger(product.slug) : slugger(product.data.name);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
