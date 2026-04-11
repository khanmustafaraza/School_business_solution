export type AdminStudentListType = {
  _id?: string;
  name: string;
  email: string;
  role: string;
};

export type AdminStudentState = {
  isLoading: boolean;
  userObj: {
    name: string;
    email: string;
    password: string;
    role: "";
  };
  userList: AdminStudentListType[];
};

export type AdminStudentContextType = {
  state: AdminStudentState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  getAllUser: () => Promise<void>;
};

export type UserAction =
  | {
      type: "SET_LOADING";
    }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        name: keyof AdminStudentState["userObj"];
        value: any;
      };
    }
  | {
      type: "GET_ALL_USER";
      payload: AdminStudentListType[];
    };
