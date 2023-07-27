import { Outlet } from 'react-router-dom';
import IMenu from '@/interfaces/IMenu';
import Header from '../Navigations/Header/Header';
import SideBar from '../Navigations/SideBar/SideBar';
import './Layout.css';

const Layout = () => {
	const menuItems: IMenu[] = [
		{ label: 'Show Quotes', link: 'home' },
		{ label: 'Submit new quote', link: 'admin' },
	];
	const sidebarItems: IMenu[] = [
		{ label: 'All', link: 'home' },
		{ label: 'Star Wars', link: 'starwars' },
		{ label: 'Famous people', link: 'famous' },
		{ label: 'Saying', link: 'saying' },
		{ label: 'Humour', link: 'humour' },
		{ label: 'Motivational', link: 'motivational' },
	];
	return (
		<>
			<Header menuItems={menuItems} />
			<div className="layout-content">
				<SideBar sidebarItems={sidebarItems} />
				<Outlet />
			</div>
		</>
	)
}

export default Layout;