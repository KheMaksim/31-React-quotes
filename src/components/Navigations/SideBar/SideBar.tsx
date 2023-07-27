import { NavLink } from 'react-router-dom';
import IMenu from '@/interfaces/IMenu';
import './SideBar.css';

interface Props {
	sidebarItems: IMenu[];
}

const SideBar = ({ sidebarItems }: Props) => {
	return (
		<div className='sidebar'>
			<ul className='sidebar__menu'>
				{sidebarItems.map((item, index) =>
					<NavLink key={index}
						to={item.link}
						className='sidebar__item'>
						{item.label}
					</NavLink>)}
			</ul>
		</div>
	)
}

export default SideBar;