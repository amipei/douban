import React from 'react';

interface Props {
  index: number,
  children: JSX.Element | JSX.Element[]
}
const ListItem = ({ children, index }: Props) => {
  return (
    <li className="list-item">
      {children}
    </li>
  );
};

export default ListItem;