import React from "react";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="p-2.5 border rounded" onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  );
};

export default Form;
