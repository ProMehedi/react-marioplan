import { CREATE_PROJECT } from '../constants/constants'

const initialState = {
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
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [action.project, ...state.projects],
      }
    default:
      return state
  }
}
