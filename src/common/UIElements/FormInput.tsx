import React, { FC } from "react";

const FormInput: FC<{ label: string; error?: string; type: string }> = ({
  label,
  error,
  type,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} />
      {!!error && <p>{error}</p>}
    </>
  );
};

export default FormInput;
