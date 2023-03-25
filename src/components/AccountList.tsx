import { IAccountCard } from 'interfaces';
import React from 'react';
import { Account } from './Account';

type IAccountListProps = React.HTMLAttributes<HTMLDivElement> & {
  accList: IAccountCard[];
  deleteHandler(id: string): void;
};
type IAccListState = {
  pickedAcc: string;
};

export class AccountList extends React.Component<IAccountListProps, IAccListState> {
  constructor(props: IAccountListProps) {
    super(props);
    this.state = {
      pickedAcc: this.props.accList[0]?.key,
    };
  }
  pickedHandler = (id: string) => {
    this.setState({ pickedAcc: id });
  };
  render() {
    return (
      <section className="acc-container">
        <h2 className="acc-container__title">
          {this.props.accList.length > 0 ? 'User shipping accounts' : 'Create at least one account'}
        </h2>
        <div className="acc-container__body">
          {this.props.accList.map((item) => (
            <Account
              deleteHandler={this.props.deleteHandler}
              acc={item}
              key={item.key}
              pickedHandler={() => this.pickedHandler(item.key)}
              accStyle={this.state.pickedAcc === item.key ? 'acc acc_active' : 'acc'}
            />
          ))}
        </div>
      </section>
    );
  }
}
