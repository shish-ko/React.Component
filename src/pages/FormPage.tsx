import PageElement from '../components/PageElement';
import React from 'react';
import { IAccountCard } from 'interfaces';
import { Form } from '../components/Form';
import { AccountList } from '../components/AccountList';
import { delAccFromLS } from '../utils';

interface IFormState {
  formItems: IAccountCard[];
}

export class FormPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('Form Page');
    if (localStorage.getItem('accounts')) {
      const res: IAccountCard[] = JSON.parse(localStorage.getItem('accounts')!);
      this.setState({ formItems: res });
    }
  }
  state: IFormState = {
    formItems: [],
  };
  formHandler = (item: IAccountCard) => {
    this.setState({ formItems: [...this.state.formItems, item] });
  };
  deleteHandler = (id: string) => {
    this.setState({
      formItems: this.state.formItems.filter((el) => el.key !== id),
    });
    delAccFromLS(id);
  };

  render() {
    return (
      <div className="form-page">
        <Form formHandler={this.formHandler} />
        <AccountList deleteHandler={this.deleteHandler} accList={this.state.formItems} />
      </div>
    );
  }
}
