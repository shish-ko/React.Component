import React from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IinputTextProps<T extends FieldValues> {
  children: React.ReactNode;
  id: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  validation?: (data: string) => true | string;
  required?: boolean | string;
}

export function InputText<T extends FieldValues>(props: IinputTextProps<T>) {
  return (
    <>
      <label htmlFor={props.id} className="form__label">
        {props.children}
      </label>
      <input
        id={props.id}
        className="form__text-input"
        {...props.register(props.id, {
          setValueAs: (value: string) => value.trim(),
          required: props.required,
          validate: props.validation,
        })}
      />
      <label htmlFor={props.id} className="form__error-label" data-testid="error">
        {props.errors[props.id] && props.errors[props.id]!.message?.toString()}
      </label>
    </>
  );
}
