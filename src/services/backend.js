
import { indexByKey, drillDown } from 'deepdown'

export const signup = async (userAttributes) => {
  return {
    status: 200,
    headers: {},
    data: userAttributes
  }
}

export const signin = async (userInfo) => {
  return {
    status: 200,
    headers: {},
    data: userInfo,
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"> <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="darkgreen" /> </svg>`

const productsList = [
  {slug: 'one', name: 'one', price: 25, id: '1234', tagLine: 'a great rush', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'two', name: 'two', price: 45, id: '2345', tagLine: 'worth the extra look', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'three', name: 'three', price: 15, id: '3456', tagLine: 'is not a crowd', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'four', name: 'four', price: 10, id: '4567', tagLine: 'watch your head', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'five', name: 'five', price: 20, id: '5678', tagLine: 'also not too shabby', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'six', name: 'six', price: 30, id: '6789', tagLine: 'half dozen of awesome', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'seven', name: 'seven', price: 20, id: '7890', tagLine: 'minutes in heaven', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'eight', name: 'eight', price: 30, id: '8901', tagLine: 'seconds on the bull', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  {slug: 'nine', name: 'nine', price: 9, id: '9012', tagLine: 'each life is precious', icon: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
]

const productsBySlug = indexByKey(productsList, ['slug'])

// encoded SVG images with this tool,
// https://yoksel.github.io/url-encoder/
export const fetchProducts = async () => {
  return {
    status: 200,
    headers: {},
    data: productsList
  }
}

export const fetchProductBySlug = async (slug) => {
  const product = drillDown(productsBySlug, [slug, 0])
  return {
    status: product ? 200 : 404,
    headers: {},
    data: product,
  }
}

export const payForOrder = async (order) => {
  return {
    status: 200,
    headers: {},
    data: order,
  }
}
