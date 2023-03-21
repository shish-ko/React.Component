import { IFormCard } from 'interfaces';
import React from 'react';

interface IFormProps {
  formHandler(item: IFormCard): void;
}
interface IFormState {
  address: boolean;
  name: boolean;
  birthDate: boolean;
  shippingMethod: boolean;
  agreement: boolean;
  gender: boolean;
}

type customInputEl = HTMLInputElement & { notValid: boolean };

export class Form extends React.Component<IFormProps, IFormState> {
  nameRef: React.RefObject<customInputEl>;
  addressRef: React.RefObject<customInputEl>;
  birthDateRef: React.RefObject<customInputEl>;
  shippingMethodRef: React.RefObject<HTMLSelectElement>;
  agreementRef: React.RefObject<customInputEl>;
  maleRef: React.RefObject<customInputEl>;
  femaleRef: React.RefObject<customInputEl>;
  unknownGenderRef: React.RefObject<customInputEl>;
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      address: false,
      name: false,
      birthDate: false,
      shippingMethod: false,
      agreement: false,
      gender: false,
    };
    this.nameRef = React.createRef();
    this.addressRef = React.createRef();
    this.birthDateRef = React.createRef();
    this.shippingMethodRef = React.createRef();
    this.agreementRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.unknownGenderRef = React.createRef();
    this.handler = this.handler.bind(this);
  }
  handler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.shippingMethodRef.current?.value);
    this.maleRef.current!.notValid = false;
    if (
      this.shippingMethodRef.current?.value === 'dhl' ||
      this.shippingMethodRef.current?.value === 'usps' ||
      this.shippingMethodRef.current?.value === 'pick up'
    ) {
      // this.props.formHandler({
      //   name: this.nameRef.current!.value,
      //   birthDate: this.birthDateRef.current!.value,
      //   address: this.addressRef.current!.value,
      //   shippingMethod: this.shippingMethodRef.current!.value,
      //  });
    }
  }
  render() {
    return (
      <form className="form" method="post" onSubmit={this.handler}>
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            First Name
          </label>
          <input name="name" ref={this.nameRef} className="form__text-input" />
          <label htmlFor="name" className="form__error-label">
            {this.state.name && 'name should be at least 3 characters long'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="address"> Address </label>
          <input name="address" ref={this.addressRef} className="form__text-input" />
          <label htmlFor="address" className="form__error-label">
            {this.state.address && 'address line should contain at least 3 words'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="birthDate"> Date-of-birth</label>
          <input
            name="birthDate"
            ref={this.birthDateRef}
            className="form__text-input"
            type={'date'}
          />
          <label htmlFor="birthDate" className="form__error-label">
            {this.state.birthDate && 'address line should contain at least 3 words'}
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="shippingMethod"> Shipping method</label>
          <select className="form__text-input" ref={this.shippingMethodRef}>
            <option value="" hidden>
              Choose one
            </option>
            <option value="pick up">Pick up</option>
            <option value="usps">USPS</option>
            <option value="dhl">DHL</option>
          </select>
          <label htmlFor="shippingMethod" className="form__error-label">
            !
          </label>
        </div>
        <fieldset className="form__item">
          <legend className="form__legend"> Gender </legend>
          <p>
            <input type={'radio'} name="gender" id="male" ref={this.maleRef} />
            <label htmlFor="male"> Male </label>
          </p>
          <p>
            <input type={'radio'} name="gender" id="female" ref={this.femaleRef} />
            <label htmlFor="female"> Female </label>
          </p>
          <p>
            <input type={'radio'} name="gender" id="unknown" ref={this.unknownGenderRef} />
            <label htmlFor="unknown"> Prefer not to say </label>
          </p>
          <label htmlFor="file" className="form__error-label">
            !
          </label>
        </fieldset>
        <div className="form__item">
          <label htmlFor="file"> User photo</label>
          <input name="file" type={'file'} />
          <label htmlFor="file" className="form__error-label">
            !
          </label>
        </div>
        <p>
          <button>Send data</button>
        </p>
      </form>
    );
  }
}
