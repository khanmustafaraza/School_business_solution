export type UserListType = {
  _id?: string;
  name: string;
  email: string;
  role: string;
};

export type UserState = {
  isLoading: boolean;
  userObj: {
    name: string;
    email: string;
    password: string;
    role: "";
  };
  userList: UserListType[];
};

export type UserContextType = {
  state: UserState;
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
        name: keyof UserState["userObj"];
        value: any;
      };
    }
  | {
      type: "GET_ALL_USER";
      payload: UserListType[];
    };
