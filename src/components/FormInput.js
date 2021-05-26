import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function FormInput({ id, labelName, placeholder, type }) {
  const { register, formState: {errors} } = useFormContext();
  return (
    <div className={`form-input form-input-${id}`}>
      <label 
      htmlFor={id}
      className={errors[`${id}`] && "error-label"}
      >{labelName}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(`${id}`, { required: "Field required" })}
        className={errors[`${id}`] && "error"}
      ></input>
      <ErrorMessage 
      errors={errors} 
      name={`${id}`}
      render={({ message }) => <span>{message}</span>} />
    </div>
  );
}
