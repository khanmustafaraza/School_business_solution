import React from "react";

type FormProps = {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const Form = ({ children, onSubmit }: FormProps) => {
    return (
        <form
            className="p-4"
            onSubmit={(e) => onSubmit(e)}
        >
            {children}
        </form>
    );
};

export default Form;