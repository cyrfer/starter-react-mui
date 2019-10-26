

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

export const fetchProducts = async () => {
  return [
    {name: 'one', price: 25, 'id': '1234', description: 'a great rush'},
    {name: 'two', price: 45, 'id': '2345', description: 'makes you pause for a minute'},
    {name: 'three', price: 15, 'id': '3456', description: 'is not a crowd'},
    {name: 'four', price: 10, 'id': '4567', description: 'watch your head'},
    {name: 'five', price: 20, 'id': '5678', description: 'also not too shabby'},
    {name: 'six', price: 30, 'id': '6789', description: 'half dozen of awesome'},
    {name: 'seven', price: 20, 'id': '7890', description: 'minutes in heaven'},
    {name: 'eight', price: 30, 'id': '8901', description: 'seconds on the bull'},
    {name: 'nine', price: 9, 'id': '9012', description: 'each life is precious'},
  ]
}
