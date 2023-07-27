import { Link } from 'react-router-dom';
import IMenu from '@/interfaces/IMenu';
import Logo from '../../Logo/Logo';
import './Header.css';

interface Props {
	menuItems: IMenu[];
}

const Header = ({ menuItems }: Props) => {
	return (
		<>
			<header className="header">
				<Link to={'home'} className='header__logo'>
					<Logo />
				</Link>
				{menuItems.map((item, index) =>
					<Link className="header__link"
						to={item.link}
						key={index}>
						{item.label}
					</Link>
				)}
			</header>
		</>
	);
};

export default Header;