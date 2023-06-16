import React from 'react';
import Context from './Context';
interface IProps {
  children: any;
}
interface IState {
  cartData: any;
}
export default class GlobalContext extends React.Component<IProps, IState> {
  state = {
    cartData: [],
  };
  addCartData = (data: any) => {
    let isDataPresent = false;
    const updatedData = this.state.cartData.map((each: any) => {
      if (each.id === data.id) {
        isDataPresent = true;
        if (each.quntity === data.quntity) {
          return {
            ...data,
            quntity: data.quntity + 1,
          };
        }
        return data;
      }
      return each;
    });
    if (isDataPresent) {
      isDataPresent = false;
      this.setState({cartData: updatedData});
    } else {
      this.setState({cartData: [...this.state.cartData, data]});
    }
  };
  deleteCartData = (id: string) => {
    console.log(id);
    const filteredCartData = this.state.cartData.filter(
      (each: any) => each.id !== id,
    );
    this.setState({cartData: filteredCartData});
  };

  render() {
    return (
      <Context.Provider
        value={{
          cartData: this.state.cartData,
          addCartData: this.addCartData,
          deleteCartData: this.deleteCartData,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
