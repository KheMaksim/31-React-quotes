import { MouseEventHandler } from 'react';
import Button from '../UI/Button/Button';
import './Quote.css';

interface Props {
	text: string;
	author: string;
	editQuote: MouseEventHandler<HTMLButtonElement>;
	deleteQuote: MouseEventHandler<HTMLButtonElement>;
}

const Quote = ({ text, author, editQuote, deleteQuote }: Props) => {
	return (
		<div className='quote'>
			<div className="quote__buttons">
				<Button onClickHandler={editQuote} children={'Edit'} />
				<Button onClickHandler={deleteQuote} children={'X'} />
			</div>
			<div className="quote__content">
				<p className='quote__text'>"{text}"</p>
				<p className='quote__author'>-{author}</p>
			</div>
		</div>
	)
}

export default Quote;