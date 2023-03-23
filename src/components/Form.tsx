import { IAccountCard, IFormRefs, IFormState } from 'interfaces';
import React from 'react';
import { validator } from '../utils';
import { PopUp } from './PopUp';

type IFormProps = React.HTMLAttributes<HTMLDivElement> & {
  formHandler(item: IAccountCard): void;
};

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      address: false,
      name: false,
      birthDate: false,
      shippingMethod: false,
      agreement: false,
      title: false,
      img: false,
      isPopUpShown: false,
    };
  }
  ref: IFormRefs = {
    nameRef: React.createRef(),
    addressRef: React.createRef(),
    birthDateRef: React.createRef(),
    shippingMethodRef: React.createRef(),
    agreementRef: React.createRef(),
    mrRef: React.createRef(),
    msRef: React.createRef(),
    unknownTitleRef: React.createRef(),
    imgRef: React.createRef(),
    formRef: React.createRef(),
  };

  handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = validator(this.setState.bind(this), this.ref);
    if (res) {
      this.props.formHandler(res);
      this.ref.formRef.current?.reset();
      this.setState({ isPopUpShown: true });
      setTimeout(() => this.setState({ isPopUpShown: false }), 1000);
    }
  };

  render() {
    return (
      <form className="form" method="post" onSubmit={this.handler} ref={this.ref.formRef}>
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            Surname
          </label>
          <input ref={this.ref.nameRef} className="form__text-input" id="name" />
          <label htmlFor="name" className="form__error-label" data-testid="error">
            {this.state.name && 'name should be at least 3 characters long'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="address"> Address </label>
          <input
            ref={this.ref.addressRef}
            className="form__text-input"
            id="address"
            name="address"
          />
          <label htmlFor="address" className="form__error-label" data-testid="error">
            {this.state.address &&
              'address should be at least 3 words long with one longer than 3 char'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="birthDate"> Date-of-birth</label>
          <input
            id="birthDate"
            ref={this.ref.birthDateRef}
            className="form__text-input"
            type={'date'}
            max={new Date().toISOString().split('T')[0]}
          />
          <label htmlFor="birthDate" className="form__error-label" data-testid="error">
            {this.state.birthDate && 'you should be older than 10 years to make an order'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="shippingMethod"> Shipping method</label>
          <select className="form__text-input" ref={this.ref.shippingMethodRef} id="shippingMethod">
            <option value="" hidden>
              Choose one
            </option>
            <option value="pick up">Pick up</option>
            <option value="usps">USPS</option>
            <option value="dhl">DHL</option>
          </select>
          <label htmlFor="shippingMethod" className="form__error-label" data-testid="error">
            {this.state.shippingMethod && 'make your choice!'}
          </label>
        </div>
        <div className="form__item">
          <fieldset className="form__fieldset">
            <legend className="form__legend"> Title </legend>
            <p>
              <input type={'radio'} name="title" id="Mr" ref={this.ref.mrRef} />
              <label htmlFor="Mr"> Mr </label>
            </p>
            <p>
              <input type={'radio'} name="title" id="Ms" ref={this.ref.msRef} />
              <label htmlFor="Ms"> Ms </label>
            </p>
            <p>
              <input type={'radio'} name="title" id="unknown" ref={this.ref.unknownTitleRef} />
              <label htmlFor="unknown"> Prefer not to say </label>
            </p>
            <label htmlFor="unknown" className="form__error-label" data-testid="error">
              {this.state.title && 'make your choice'}
            </label>
          </fieldset>
        </div>
        <div className="form__item">
          <label htmlFor="file"> User photo (.png)</label>
          <input id="file" type={'file'} ref={this.ref.imgRef} />
          <label htmlFor="file" className="form__error-label" data-testid="error">
            {this.state.img && 'provide image in .png format'}
          </label>
          <p>
            <input id="agreement" ref={this.ref.agreementRef} type={'checkbox'} />
            <label htmlFor="agreement">
              {' '}
              I hereby consent to the processing of the personal data that I have provided{' '}
            </label>
          </p>
          <label htmlFor="agreement" className="form__error-label" data-testid="error">
            {this.state.agreement && 'this field is required'}
          </label>
        </div>
        <p>
          <button>Create account</button>
        </p>
        <PopUp isActive={this.state.isPopUpShown}>
          <h2>Account was successfully created</h2>
        </PopUp>
      </form>
    );
  }
}
