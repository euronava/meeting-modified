import React, { FC, useEffect } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
import { navItems } from "./Constants";
import { Footer } from './Footer';
import { Dashboard } from '../pages/Dashboard';
import { Menu } from '../pages/Menu';
import { About } from '../pages/About';

export enum MenuId {
  Dashboard = "0",
  Home = "1",
  News = "2",
  Contact = "3",
  About = "4",
}
export interface INavProps {
}
interface INavState {
  menuId: MenuId;
}


export const Tab: FC<INavProps> = () => {
  const [menuId, setMenuId] = React.useState<INavState>({
    menuId: MenuId.Dashboard 
  });
  const handleChangeMenuId = (e: MenuId) => {
    setMenuId({ menuId: e });
  }
  const currentPage = () => {
    if (menuId.menuId === MenuId.Dashboard) {
      return <Dashboard />
    } else if (menuId.menuId === MenuId.Home) {
      return <Menu />
    } else if (menuId.menuId === MenuId.News) {
      return <h1>News</h1>
    } else if (menuId.menuId === MenuId.Contact) {
      return <h1>Contact</h1>
    } else if (menuId.menuId === MenuId.About) {
      return <About />
    }
  }

  useEffect(() => {
    if (microsoftTeams.app.isInitialized()) {
      microsoftTeams.menus.initialize();
      microsoftTeams.menus.setNavBarMenu(navItems, (id: string) => {
        setMenuId({ menuId: id as MenuId });
        return true;
      });
    }
  }, []);


  return (
    <div className='main__grid'>
      {currentPage()}
      <Footer onChangeTab={handleChangeMenuId} />
    </div>
  );
}


// class Tab extends React.Component<INavProps, INavState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       menuId: "0"
//     }
//   }
  
//   public async componentDidMount() {
//     microsoftTeams.menus.initialize();
//     this.navBarMenu();
//   }

//   public navBarMenu = async () => {
//     microsoftTeams.menus.setNavBarMenu(navItems, (id: string) => {
//       this.setState({ menuId: id })
//       return true;
//     });
//    }
   
//   public render() {
//     let content;
//     if(this.state.menuId === "0"){
//       content = <h1>Dashboard</h1>
//     }else if(this.state.menuId === "1"){
//       content = <h1>Home</h1>
//     }else if(this.state.menuId === "2"){
//       content = <h1>News</h1>
//     }else if(this.state.menuId === "3"){
//       content = <h1>Contact</h1>
//     }else  if(this.state.menuId === "4"){
//       content = <h1>About</h1>
//     }
//     return (
//       <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//         <p>{content}</p>
//       </div>
//     );
//   }
//   }
// export default Tab;