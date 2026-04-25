const UserReducer = (state: any, action: any) => {
  switch (action.type) {

    case "GET_ALL_USER":
      return {
        ...state,
        userList: action.payload.users, // ✅ FIXED
        page: action.payload.page,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
      };

    case "HANDLE_CHANGE":
      return {
        ...state,
        userObj: {
          ...state.userObj,
          [action.payload.name]: action.payload.value,
        },
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "SET_SUCCESS":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;