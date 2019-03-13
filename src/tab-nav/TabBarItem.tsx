import React,{ ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";

interface Props {
  component: React.SFC
  icon: ComponentType<React.SVGAttributes<SVGElement>>
  title: string
  path: string
}
const TabBarItem = ({ icon: Di, title, path }: Props) => {
  return (
    <NavLink to={path} className="item f-ctr">
      <IconContext.Provider value={{ size:'6vw'}}>
        <div>
          <Di />
        </div>
      </IconContext.Provider>
      <span>{title}</span>
    </NavLink>
  );
};

export default TabBarItem;


