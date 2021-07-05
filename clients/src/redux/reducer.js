import { ADD, DELETE, EDIT, GET } from "./actionTypes";

const init = {
  users: [],
  loading: true,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        users: payload,
        loading: false,
      };
      case DELETE :
        return {
          ...state,
          users: state.users.filter((user) => user._id !== payload._id),
        };
      case ADD :
        return {
          ...state,
          users: [...state.users, payload],
        };    
        case EDIT :
          return {
            ...state,
            users: state.users.map((user) =>
            user._id=== payload._id ? {...user, ...payload} :user
            ),
          };

    default:
      return state;

  }
};
export default reducer ;
