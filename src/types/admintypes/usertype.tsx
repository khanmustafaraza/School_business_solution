// ================= TYPES =================

export type UserListType = {
  _id?: string;
  name: string;
  email: string;
  role: string;
};

export type UserState = {
  isLoading: {
    loading: boolean;
    message: string;
  };

  userObj: {
    name: string;
    email: string;
    password: string;
    role: string;
  };

  userList: UserListType[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  counter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
   prevPage: number;
      nextPage: number;

  //  data: data.docs,

  // totalDocs: data.totalDocs,
  // limit: data.limit,
  // totalPages: data.totalPages,
  // page: data.page,
  // counter:data.pagingCounter,
  // hasPrevPage: data.hasPrevPage,
  // hasNextPage: data.hasNextPage,
  // prevPage: data.prevPage,
  // nextPage: data.nextPage
};

export type UserAction =
  | {
    type: "SET_LOADING";
    payload: { loading: boolean; message: string };
  }
  | {
    type: "SET_SUCCESS";
    payload: { loading: boolean; message: string };
  }
  | {
    type: "HANDLE_CHANGE";
    payload: {
      name: keyof UserState["userObj"];
      value: string;
    };
  }
  | {
    type: "GET_ALL_USER";
    payload: {
      users: UserListType[];
      totalDocs: number;
      limit: number;
      totalPages: number;
      page: number;
      counter: number;
      hasPrevPage: boolean;
      hasNextPage: boolean;
      prevPage: number;
      nextPage: number;
    };
  };

export type UserContextType = {
  state: UserState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => Promise<void>;
  getAllUser: (page?: number) => Promise<void>;
};
