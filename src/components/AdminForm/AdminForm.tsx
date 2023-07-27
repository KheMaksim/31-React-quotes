import { ChangeEvent, FormEvent } from 'react';
import Button from '../UI/Button/Button';
import './AdminForm.css';

interface Props {
	category: string;
	author: string;
	text: string;
	changeAuthor: (e: ChangeEvent<HTMLInputElement>) => void;
	changeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onClickHandler: (e: FormEvent<HTMLButtonElement>) => void;
}

const AdminForm = ({ author, text, changeAuthor, changeText, onClickHandler, category }: Props) => {
	return (
		<form className='admin__form'>
			<label className='admin__label' htmlFor="textarea">Author:</label>
			<input className='admin__input'
				type='text'
				id="textarea"
				value={author}
				onChange={changeAuthor}
			/>
			<label className='admin__label' htmlFor="textarea">Content:</label>
			<textarea className='admin__input'
				id="textarea"
				value={text}
				onChange={changeText}
			/>
			<Button
				onClickHandler={onClickHandler}
				children={'Add'}
				disabled={(category === '' || author.trim() === '' || text.trim() === '') ? true : false} />
		</form>
	)
}

export default AdminForm;