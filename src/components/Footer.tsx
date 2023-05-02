import React from 'react';
import { MenuId } from './Tab';

interface Props {
  onChangeTab: (tab: MenuId) => void;
}


export const Footer = ( { onChangeTab }: Props) => {

  const handleClick = (e: MenuId) => () => {
    onChangeTab(e);
  }

  const footerOptions = [
      { id: MenuId.Dashboard, label: 'Dashboard', icon: <i className="fa-solid fa-house"></i> },
      { id: MenuId.Home, label: 'Menu', icon: <i className="fa-solid fa-bars"></i> },
      { id: MenuId.About, label: 'About', icon: <i className="fa-solid fa-info"></i> },
    ];


  return (
  <footer className='footer__position'>
    {
      footerOptions.map((item) => (
        <button className='footer__button' key={item.id} onClick={handleClick(item.id)}>{item.icon}<span>{item.label}</span></button>
      ))
    }
  </footer>
  );
}