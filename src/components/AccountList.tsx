import { IAccountCard } from 'interfaces';
import React from 'react';
import { Account } from './Account';

interface IAccountListProps {
  accList: IAccountCard[];
}
export class AccountList extends React.Component<IAccountListProps> {
  render() {
    return (
      <section className="acc-container">
        <h2 className="acc-container__title">
          {this.props.accList.length > 0 ? 'User shipping accounts' : 'Create at least one account'}
        </h2>
        <div className="acc-container__body">
          {this.props.accList.map((item) => (
            <Account acc={item} key={item.key} />
          ))}
        </div>
      </section>
    );
  }
}
