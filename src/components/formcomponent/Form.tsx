import React from "react";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <>
      <form
        className="p-2.5 rounded w-full shadow lg:p-3 md:p-3 xxl:p-3"
        onSubmit={(e) => onSubmit(e)}
      >
        {children}
      </form>
    </>
  );
};

export default Form;
