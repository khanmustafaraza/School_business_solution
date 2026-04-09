export type ClassObjType = {
  _id?: string;
  name: string;
  section: string;
  no: number;
};

export type ClassFormType = {
  name: string;
  section: string;
  no: number;
};

export type ClassStateType = {
  classObj: ClassFormType;
  isLoading: boolean;
  classList: ClassObjType[];
};

export type ClassContextType = {
  state: ClassStateType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type ClassActionType =
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        name: keyof ClassStateType["classObj"];
        value: string | number;
      };
    };
