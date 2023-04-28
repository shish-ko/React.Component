import { IFormNames } from '../interfaces/interfaces';
import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { isAddressValid, isBirthDateValid, isImageValid } from '../utils';
import { PopUp } from './PopUp';
import { InputSelect } from './UI/Input-select';
import { InputText } from './UI/Input-text';
import { useDispatch } from 'react-redux';
import { addAccount } from '../store/formSlice';

export const CreateAccForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormNames>({ reValidateMode: 'onSubmit' });

  const dispatch = useDispatch();
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  const handler = (data: IFormNames) => {
    data.key = Date.now().toString();
    data.img = URL.createObjectURL(data.img[0] as File);
    dispatch(addAccount(data));
    setIsPopUpShown(true);
    setTimeout(() => setIsPopUpShown(false), 1000);
    reset();
  };

  const handler2 = (data: FieldErrors<IFormNames>) => {
    console.log(data);
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit(handler, handler2)}>
      <div className="form__item">
        <InputText
          id="name"
          register={register}
          errors={errors}
          validation={(data) => data.length >= 3 || 'name should be at least 3 characters long'}
          required="name should be at least 3 characters long"
        >
          Surname
        </InputText>
      </div>
      <div className="form__item">
        <InputText
          id="address"
          register={register}
          errors={errors}
          validation={isAddressValid}
          required="address should be at least 3 words long with one longer than 3 char"
        >
          Address
        </InputText>
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
        <InputSelect
          register={register}
          id="shippingMethod"
          errors={errors}
          required="make your choice!"
          options={['Pick up', 'USPS', 'DHL']}
        >
          Shipping method
        </InputSelect>
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
