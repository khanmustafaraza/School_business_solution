import { UserAction, UserState } from "@/types/admin/usertype";

const UserReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          loading:action.payload.loading,
          message:action.payload.message
        },
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
        // page: action.payload.page,
        // totalPages: action.payload.totalPages,
      };
    case "GET_ALL_USER":
      return {
        ...state,
        userList: action.payload,
      };
    case "SET_SUCCESS":
      return {
        ...state,
      isLoading:{
        ...state.isLoading,
        loading:action.payload.loading,
        message:action.payload.message
      }
      };
    default:
      return state;
  }
};

export default UserReducer;
