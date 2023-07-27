import { ChangeEvent } from "react";
import ISelect from "@/interfaces/ISelect";
import './Select.css';

interface Props {
	value: string;
	onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, onChangeHandler }: Props) => {
	const options: ISelect[] = [
		{ value: '', title: 'No category' },
		{ value: 'starwars', title: 'Star Wars' },
		{ value: 'famous', title: 'Famous people' },
		{ value: 'saying', title: 'Saying' },
		{ value: 'humour', title: 'Humour' },
		{ value: 'motivational', title: 'Motivational' },
	]
	return (
		<>
			<label className='admin__label' htmlFor="select">Select a category:</label>
			<select id="select"
				className='admin__select'
				value={value}
				onChange={onChangeHandler}>
				{options.map((item, index) =>
					<option
						key={index}
						value={item.value}>
						{item.title}
					</option>)}
			</select>
		</>
	)
}

export default Select;