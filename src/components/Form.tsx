import { IAccountCard, IFormRefs, IFormState } from 'interfaces';
import React from 'react';
import { validator } from '../utils';

interface IFormProps {
  formHandler(item: IAccountCard): void;
}

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      address: false,
      name: false,
      birthDate: false,
      shippingMethod: false,
      agreement: false,
      gender: false,
      img: false,
    };
  }
  ref: IFormRefs = {
    nameRef: React.createRef(),
    addressRef: React.createRef(),
    birthDateRef: React.createRef(),
    shippingMethodRef: React.createRef(),
    agreementRef: React.createRef(),
    maleRef: React.createRef(),
    femaleRef: React.createRef(),
    unknownGenderRef: React.createRef(),
    imgRef: React.createRef(),
  };

  handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = validator(this.setState.bind(this), this.ref);
    if (res) {
      this.props.formHandler(res);
    }
  };

  render() {
    return (
      <form className="form" method="post" onSubmit={this.handler}>
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            First Name
          </label>
          <input name="name" ref={this.ref.nameRef} className="form__text-input" />
          <label htmlFor="name" className="form__error-label">
            {this.state.name && 'name should be at least 3 characters long'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="address"> Address </label>
          <input name="address" ref={this.ref.addressRef} className="form__text-input" />
          <label htmlFor="address" className="form__error-label">
            {this.state.address &&
              'address should be at least 3 words long with one longer than 3 char'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="birthDate"> Date-of-birth</label>
          <input
            name="birthDate"
            ref={this.ref.birthDateRef}
            className="form__text-input"
            type={'date'}
            max={new Date().toISOString().split('T')[0]}
          />
          <label htmlFor="birthDate" className="form__error-label">
            {this.state.birthDate && 'you should be older than 10 years to make an order'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="shippingMethod"> Shipping method</label>
          <select className="form__text-input" ref={this.ref.shippingMethodRef}>
            <option value="" hidden>
              Choose one
            </option>
            <option value="pick up">Pick up</option>
            <option value="usps">USPS</option>
            <option value="dhl">DHL</option>
          </select>
          <label htmlFor="shippingMethod" className="form__error-label">
            {this.state.shippingMethod && 'make your choice'}
          </label>
          {localStorage.getItem('img') && <img src={localStorage.getItem('img') as string} />}
        </div>
        <div className="form__item">
          <fieldset className="form__fieldset">
            <legend className="form__legend"> Gender </legend>
            <p>
              <input type={'radio'} name="gender" id="male" ref={this.ref.maleRef} />
              <label htmlFor="male"> Male </label>
            </p>
            <p>
              <input type={'radio'} name="gender" id="female" ref={this.ref.femaleRef} />
              <label htmlFor="female"> Female </label>
            </p>
            <p>
              <input type={'radio'} name="gender" id="unknown" ref={this.ref.unknownGenderRef} />
              <label htmlFor="unknown"> Prefer not to say </label>
            </p>
            <label htmlFor="unknown" className="form__error-label">
              {this.state.gender && 'make your choice'}
            </label>
          </fieldset>
        </div>
        <div className="form__item">
          <label htmlFor="file"> User photo (.png)</label>
          <input name="file" type={'file'} ref={this.ref.imgRef} />
          <label htmlFor="file" className="form__error-label">
            {this.state.img && 'provide image in .png format'}
          </label>
          <p>
            <input id="agreement" ref={this.ref.agreementRef} type={'checkbox'} />
            <label htmlFor="agreement">
              {' '}
              I hereby consent to the processing of the personal data that I have provided{' '}
            </label>
          </p>
          <label htmlFor="agreement" className="form__error-label">
            {this.state.agreement && 'this field is required'}
          </label>
        </div>
        <p>
          <button>Send data</button>
        </p>
      </form>
    );
  }
}
