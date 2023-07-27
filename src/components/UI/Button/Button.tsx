import { MouseEventHandler, ReactNode } from 'react';
import './Button.css'

interface Props {
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	disabled?: boolean;
}

const Button = ({ onClickHandler, children, disabled }: Props) => {
	return (
		<button
			className={children === 'X' ? 'button delete' : 'button'}
			onClick={onClickHandler}
			disabled={disabled}>
			{children}
		</button>
	)
}

export default Button;