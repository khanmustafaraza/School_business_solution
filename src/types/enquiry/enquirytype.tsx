export type EnquiryListType = {
  _id: string;
  name: string;
  addmissionClass: string;
  message: string;
};

export type EnquiryStateType = {
  isLoading: {
    loading: boolean;
    message: string;
  };
  enquiryObj: {
    name: string;
    mobile: number | ""; // 👈 better for input handling
    addmissionClass: string;
    message: string;
  };
  enquiryList: EnquiryListType[];
};

export type EnquiryContextType = {
  state: EnquiryStateType;

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>,
  ) => void;

  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;

  getEnquiryList: () => Promise<void>;
};

export type EnquiryAction =
  | {
      type: "SET_LOADING";
      payload: {
        loading: boolean;
        message: string;
      };
    }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        key: keyof EnquiryStateType["enquiryObj"]; // ✅ strongly typed
        value: string | number;
      };
    }
  | {
      type: "SET_SUCCESS";
    }
  | {
      type: "SET_ENQUIRY_LIST";
      payload: EnquiryListType[];
    };
