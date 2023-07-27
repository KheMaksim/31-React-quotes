import { useCallback, useEffect, useState } from 'react';
import { URLSearchParamsInit, createSearchParams, useNavigate, useParams } from 'react-router-dom';
import api from '@/api/apiService';
import IQuote from '@/interfaces/IQuote';
import Loader from '../UI/Loader/Loader';
import Quote from '../Quote/Quote';
import './Page.css';

const Page = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState<IQuote[]>([]);
	const [loading, setLoading] = useState(false);
	const { pageName } = useParams();
	const navigate = useNavigate();

	const titleHandler = (category: string | undefined) => {
		switch (category) {
			case 'starwars':
				setTitle('Star Wars quotes')
				break;
			case 'famous':
				setTitle('Famous people quotes')
				break;
			case 'saying':
				setTitle('Saying quotes')
				break;
			case 'humour':
				setTitle('Humour quotes')
				break;
			case 'motivational':
				setTitle('Motivational quotes')
				break;
			default:
				setTitle('All quotes')
				break;
		}
	}

	const getPage = useCallback(async () => {
		setLoading(true);
		titleHandler(pageName);
		const filterURL = (pageName === 'home' || pageName === undefined) ? '' : `?orderBy="category"&equalTo="${pageName}"`;
		try {
			const { data: quoteResponse } = await api.get<IQuote>('quotes.json' + filterURL);
			if (quoteResponse === null) {
				setContent([]);
				return;
			}
			const quotes: IQuote[] = Object.entries(quoteResponse).map(([id, { author, category, text }]) => ({
				id, author, category, text
			}));
			if (pageName === undefined || pageName === 'home') {
				setContent(quotes);
				return;
			}
			const filteredQuotes = quotes.filter(quote => quote.category === pageName);
			setContent(filteredQuotes);
		} catch (error) {
			console.error("Ошибка при получении цитат:", error);
		} finally {
			setLoading(false);
		}
	}, [pageName]);

	const editQuote = (quoteId: string) => {
		const [quote] = content.filter(quote => quote.id === quoteId);
		const params = createSearchParams(
			quote as unknown as URLSearchParamsInit
		);
		navigate({ pathname: "../edit", search: params.toString() });
	}

	const deleteQuote = async (quoteId: string) => {
		setLoading(true);
		try {
			await api.delete<{ quoteId: string }>(`quotes/${quoteId}.json`);
		} catch (error) {
			console.error("Ошибка при удалении цитаты:", error);
		} finally {
			setLoading(false);
			getPage();
		}
	}

	useEffect(() => {
		getPage()
	}, [getPage, pageName])

	return (
		<>
			{loading && <Loader />}
			<div className='page'>
				<h1 className="page__title">
					{title}
				</h1>
				<div className="page__content">
					{content.length === 0 ? <p className="page__title">No quotes yet.</p> :
						content.map((content, index) =>
							<Quote
								key={index}
								text={content.text}
								author={content.author}
								editQuote={() => editQuote(content.id)}
								deleteQuote={() => deleteQuote(content.id)}
							/>
						)}
				</div>
			</div>
		</>
	)
}

export default Page;