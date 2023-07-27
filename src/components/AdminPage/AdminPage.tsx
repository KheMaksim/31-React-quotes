import { ChangeEvent, FormEvent, useState } from 'react';
import api from '@/api/apiService';
import IQuote from '@/interfaces/IQuote';
import Loader from '../UI/Loader/Loader';
import Select from '../UI/Select/Select';
import AdminForm from '../AdminForm/AdminForm';
import './AdminPage.css';

const AdminPage = () => {
	const [author, setAuthor] = useState('');
	const [text, setText] = useState('');
	const [category, setCategory] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSelectPage = (e: ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};

	const changeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthor(e.currentTarget.value);
	};
	const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
	};

	const addQuote = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setLoading(true);
		const newQuote: IQuote = { author: author, category: category, text: text, id: '' }
		try {
			await api.post<IQuote>(`quotes.json`, newQuote);
		} catch (error) {
			console.error("Ошибка при добавлении:", error);
		} finally {
			setLoading(false);
			setAuthor('');
			setText('');
		}
	};

	return (
		<>
			{loading && <Loader />}
			<div className='admin'>
				<h2 className='admin__title'>Add new quote:</h2>
				<Select value={category} onChangeHandler={handleSelectPage} />
				<AdminForm
					category={category}
					author={author}
					changeAuthor={changeAuthor}
					text={text}
					changeText={changeText}
					onClickHandler={addQuote}
				/>
			</div>
		</>
	)
}

export default AdminPage;