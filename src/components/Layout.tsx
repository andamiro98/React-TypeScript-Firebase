import React from 'react';
import { St_Layout } from '../css/LayoutStyle';

interface Children {
  children: JSX.Element;
} 

const Layout = ({ children }: Children) => {
  return <St_Layout>{children} </St_Layout>;
};
export default Layout;
