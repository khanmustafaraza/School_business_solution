import { ClassActionType, ClassStateType } from "@/types/classtype";

export const ClassReducer = (
  state: ClassStateType,
  action: ClassActionType,
): ClassStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "HANDLE_CHANGE":
      return {
        ...state,
        classObj: {
          ...state.classObj,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
};
