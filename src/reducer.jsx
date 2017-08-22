const initialState = {
  fuga: 1
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { fuga: state.fuga + 1 } // state に直接変更を加えてはいけないので fuga++ してはいけない
    default:
      return state
  }
}
