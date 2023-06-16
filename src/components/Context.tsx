/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export default React.createContext({
  cartData: [],
  addCartData: (data: any) => {},
  deleteCartData: (id: string) => {},
});
