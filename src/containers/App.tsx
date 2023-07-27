import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout';
import Page from '@/components/Page/Page';
import EditPage from '@/components/EditPage/EditPage';
import AdminPage from '@/components/AdminPage/AdminPage';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Page />} />
					<Route path="/:pageName" element={<Page />} />
					<Route path="/edit" element={<EditPage />} />
					<Route path="/admin" element={<AdminPage />} />
				</Route >
			</Routes >
		</BrowserRouter >
	)
}

export default App;