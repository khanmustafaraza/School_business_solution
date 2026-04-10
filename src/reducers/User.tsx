import { UserAction, UserState } from "@/types/usertype";

const UserReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "HANDLE_CHANGE":
      return {
        ...state,
        userObj: {
          ...state.userObj,
          [action.payload.name]: action.payload.value,
        },
      };
    case "GET_ALL_USER":
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};


export default UserReducer