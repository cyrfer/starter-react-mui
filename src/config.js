
const config = {
  storage: {
    name: 'state'
  },
  user: {
    signInAttributes: [
      {name: 'username', type: 'text'},
      {name: 'password', type: 'password'},
    ],
    signUpAttributes: [
      {name: 'username', type: 'text'},
      {name: 'password', type: 'password'},
      {name: 'name', type: 'input'},
    ]
  }
}

export default config
