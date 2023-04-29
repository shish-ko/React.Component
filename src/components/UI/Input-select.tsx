import React from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IinputSelectProps<T extends FieldValues> {
  children: React.ReactNode;
  id: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  options: string[];
  required?: boolean | string;
}

export function InputSelect<T extends FieldValues>(props: IinputSelectProps<T>) {
  return (
    <>
      <label htmlFor={props.id}> {props.children}</label>
      <select
        className="form__text-input"
        {...props.register(props.id, { required: props.required })}
        id={props.id}
      >
        <option value="" hidden>
          Choose one
        </option>
        {props.options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor={props.id} className="form__error-label" data-testid="error">
        {props.errors.shippingMethod && props.errors.shippingMethod.message?.toString()}
      </label>
    </>
  );
}
