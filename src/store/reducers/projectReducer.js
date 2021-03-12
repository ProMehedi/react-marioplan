import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_RESET,
} from '../constants/constants'

const initialState = {
  setError: null,
  loading: false,
  projects: [
    {
      id: '1',
      title: 'This is a sample title 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut voluptatibus quam cumque recusandae explicabo hic consequatur officia ratione laudantium?',
    },
    {
      id: '2',
      title: 'This is a sample title 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut voluptatibus quam cumque recusandae explicabo hic consequatur officia ratione laudantium?',
    },
    {
      id: '3',
      title: 'This is a sample title 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut voluptatibus quam cumque recusandae explicabo hic consequatur officia ratione laudantium?',
    },
    {
      id: '4',
      title: 'This is a sample title 4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut voluptatibus quam cumque recusandae explicabo hic consequatur officia ratione laudantium?',
    },
  ],
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return { ...state, loading: true }

    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.project, ...state.projects],
        loading: false,
        success: true,
      }

    case CREATE_PROJECT_FAIL:
      return { ...state, setError: action.error, loading: action.loading }

    case CREATE_PROJECT_RESET:
      return { ...state, setError: null, success: false }

    default:
      return state
  }
}
