import logo from '@/assets/logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="logo">
			<img src={logo} alt="logo" className="logo-img" />
		</div>
	)
}

export default Logo;