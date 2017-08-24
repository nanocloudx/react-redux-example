const initialState = {
  counter: 1
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 } // state に直接変更を加えてはいけないので fuga++ してはいけない
    case 'DECREMENT':
      return { counter: state.counter - 1}
    case 'RESET':
      return { counter: 0 }
    default:
      return state
  }
}
