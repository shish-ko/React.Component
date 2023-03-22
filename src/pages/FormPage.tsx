import PageElement from '../components/PageElement';
import React from 'react';
import { IAccountCard } from 'interfaces';
import { Form } from '../components/Form';
import { Account } from '../components/Account';

interface IFormState {
  formItems: IAccountCard[];
}

export class FormPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('Form Page');
  }
  state: IFormState = {
    formItems: [],
  };
  formHandler = (item: IAccountCard) => {
    this.setState({ formItems: [...this.state.formItems, item] });
  };

  render() {
    return (
      <div className="form-page">
        <Form formHandler={this.formHandler} />
        {this.state.formItems.map((item, index) => (
          <Account acc={item} key={index} />
        ))}
      </div>
    );
  }
}
