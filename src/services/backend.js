

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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"> <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="4" fill="darkgreen" /> </svg>`

// encoded SVG images with this tool,
// https://yoksel.github.io/url-encoder/
export const fetchProducts = async () => {
  return [
    {name: 'one', price: 25, 'id': '1234', description: 'a great rush', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'two', price: 45, 'id': '2345', description: 'makes you pause for a minute', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'three', price: 15, 'id': '3456', description: 'is not a crowd', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'four', price: 10, 'id': '4567', description: 'watch your head', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'five', price: 20, 'id': '5678', description: 'also not too shabby', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'six', price: 30, 'id': '6789', description: 'half dozen of awesome', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'seven', price: 20, 'id': '7890', description: 'minutes in heaven', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'eight', price: 30, 'id': '8901', description: 'seconds on the bull', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
    {name: 'nine', price: 9, 'id': '9012', description: 'each life is precious', image: `data:image/svg+xml,${(encodeURIComponent(svg))}`},
  ]
}
