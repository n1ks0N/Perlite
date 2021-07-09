const initialState = {
  pages: []
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PAGES': 
      return {
        ...state,
        pages: action.pages
      }
    default: 
      return state
  }
}

export const getPagesActionCreator = (pages) => ({ type: 'GET_PAGES', pages: pages })

export default contentReducer