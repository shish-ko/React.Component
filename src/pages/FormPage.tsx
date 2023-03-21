import PageElement from '../components/PageElement';
import React from 'react';
import { IFormCard } from 'interfaces';
import { Form } from '../components/Form';

interface IFormState {
  formItems: IFormCard[];
}

export class FormPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('Form Page');
  }
  state: IFormState = {
    formItems: [],
  };
  formHandler = (item: IFormCard) => {
    this.setState({ formItems: [...this.state.formItems, item] });
  };

  render() {
    return (
      <div className="form-page">
        <Form formHandler={this.formHandler} />
      </div>
    );
  }
}
