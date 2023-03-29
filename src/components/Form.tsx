import { IAccountCard } from 'interfaces';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { isAddressValid, isBirthDateValid, isImageValid, saveAccToLS } from '../utils';
import { PopUp } from './PopUp';

// type ErrorValues = {
//   [x: string]: { message?: string };
// };
type IFormProps = React.HTMLAttributes<HTMLDivElement> & {
  formHandler(item: IAccountCard): void;
};
type IFormNames = IAccountCard & { agreement: boolean; save: boolean };

export const Form: React.FC<IFormProps> = ({ formHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormNames>({ reValidateMode: 'onSubmit' });

  const [isPopUpShown, setIsPopUpShown] = useState(false);

  const handler = (data: IFormNames) => {
    data.key = new Date().toString();
    if (data.save) saveAccToLS(data);
    data.img = URL.createObjectURL(data.img[0] as File);
    formHandler(data);
    setIsPopUpShown(true);
    setTimeout(() => setIsPopUpShown(false), 1000);
    reset();
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit(handler)}>
      <div className="form__item">
        <label htmlFor="name" className="form__label">
          Surname
        </label>
        <input
          {...register('name', {
            minLength: 3,
            required: true,
            setValueAs: (value: string) => value.trim(),
          })}
          id="name"
          className="form__text-input"
        />
        <label htmlFor="name" className="form__error-label" data-testid="error">
          {errors.name && 'name should be at least 3 characters long'}
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="address"> Address </label>
        <input
          {...register('address', {
            required: 'address should be at least 3 words long with one longer than 3 char',
            validate: isAddressValid,
          })}
          className="form__text-input"
          id="address"
        />
        <label htmlFor="address" className="form__error-label" data-testid="error">
          {errors.address && errors.address.message?.toString()}
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="birthDate"> Date-of-birth</label>
        <input
          id="birthDate"
          {...register('birthDate', {
            required: 'you should be older than 10 years to make an order',
            validate: isBirthDateValid,
          })}
          className="form__text-input"
          type={'date'}
          max={new Date().toISOString().split('T')[0]}
        />
        <label htmlFor="birthDate" className="form__error-label" data-testid="error">
          {errors.birthDate && errors.birthDate.message?.toString()}
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="shippingMethod"> Shipping method</label>
        <select
          className="form__text-input"
          {...register('shippingMethod', { required: 'make your choice!' })}
          id="shippingMethod"
        >
          <option value="" hidden>
            Choose one
          </option>
          <option value="pick up">Pick up</option>
          <option value="usps">USPS</option>
          <option value="dhl">DHL</option>
        </select>
        <label htmlFor="shippingMethod" className="form__error-label" data-testid="error">
          {errors.shippingMethod && errors.shippingMethod.message?.toString()}
        </label>
      </div>
      <div className="form__item">
        <fieldset className="form__fieldset">
          <legend className="form__legend"> Title </legend>
          <p>
            <input
              type={'radio'}
              id="Mr"
              value="Mr"
              {...register('title', { required: 'make your choice' })}
            />
            <label htmlFor="Mr"> Mr </label>
          </p>
          <p>
            <input type={'radio'} id="Ms" {...register('title')} value="Ms" />
            <label htmlFor="Ms"> Ms </label>
          </p>
          <p>
            <input type={'radio'} id="unknown" {...register('title')} value="unknown" />
            <label htmlFor="unknown"> Prefer not to say </label>
          </p>
          <label htmlFor="unknown" className="form__error-label" data-testid="error">
            {errors.title && errors.title.message?.toString()}
          </label>
        </fieldset>
      </div>
      <div className="form__item">
        <label htmlFor="img"> User photo (.png)</label>
        <input
          id="img"
          type={'file'}
          {...register('img', {
            required: 'provide image in .png format',
            validate: (data) => isImageValid(data as File[]),
          })}
        />
        <label htmlFor="img" className="form__error-label" data-testid="error">
          {errors.img && 'provide image in .png format'}
        </label>
        <p>
          <input
            id="agreement"
            {...register('agreement', { required: 'this field is required' })}
            type={'checkbox'}
          />
          <label htmlFor="agreement">
            {' '}
            I hereby consent to the processing of the personal data that I have provided{' '}
          </label>
        </p>
        <label htmlFor="agreement" className="form__error-label" data-testid="error">
          {errors.agreement && errors.agreement.message?.toString()}
        </label>
        <p>
          <input id="save" {...register('save')} type={'checkbox'} />
          <label htmlFor="save"> Enable after reset(extra feature)</label>
        </p>
      </div>
      <p>
        <button>Create account</button>
      </p>
      <PopUp isActive={isPopUpShown}>
        <h2>Account was successfully created</h2>
      </PopUp>
    </form>
  );
};
