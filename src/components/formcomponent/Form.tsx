import React from "react";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="p-3.5 shadow  w-full" onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  );
};

export default Form;
