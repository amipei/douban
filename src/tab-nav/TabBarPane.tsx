import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  path: string
  component: any
}

const TabBarPane = ({ path, component }: Props) => {

  return (
    <Route path={path} component={component} />
  );
};

export default TabBarPane;