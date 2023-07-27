import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import parseSearch from '@/helpers/parseSearch';
import api from '@/api/apiService';
import IQuote from '@/interfaces/IQuote';
import Loader from '../UI/Loader/Loader';
import Modal from '../UI/Modal/Modal'
import Select from '../UI/Select/Select';
import AdminForm from '../AdminForm/AdminForm'

const EditPage = () => {
	const [params] = useSearchParams();
	const { current: quote } = useRef(parseSearch<IQuote>(params));
	const [author, setAuthor] = useState(quote.author);
	const [text, setText] = useState(quote.text);
	const [category, setCategory] = useState(quote.category);
	const [show, setShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSelectPage = (e: ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};

	const changeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthor(e.currentTarget.value);
	};

	const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
	};

	const editQuote = async (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setLoading(true);
		const newQuote: IQuote = { author: author, category: category, text: text, id: '' }
		try {
			await api.put<IQuote>(`quotes/${quote.id}.json`, newQuote);
		} catch (error) {
			console.error("Ошибка при изменении:", error);
		} finally {
			setLoading(false);
			navigate(`../${category}`);
		}
	};

	const showHandler = () => {
		setShow(!show);
		navigate('../home');
	}

	return (
		<>
			{loading && <Loader />}
			<Modal show={show}
				close={showHandler}>
				<h2 className='admin__title'>Edit new quote:</h2>
				<Select value={category} onChangeHandler={handleSelectPage} />
				<AdminForm
					category={category}
					author={author}
					changeAuthor={changeAuthor}
					text={text}
					changeText={changeText}
					onClickHandler={editQuote}
				/>
			</Modal>
		</>
	)
}

export default EditPage;