const simpleReducer = (state = {product_id: Math.floor(Math.random() * Math.floor(10000))}, action) => {
  switch (action.type) {
    case 'INIT_STORE':
      let tempObj = {
        list: action.list,
        init: true
      }
      return Object.assign({}, state, tempObj)
    default:
      return state;
  }
}

export default simpleReducer;