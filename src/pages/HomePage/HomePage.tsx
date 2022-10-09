import { PageWrapper } from 'App.styled';
import { Helmet } from "react-helmet";
import { TestDiv } from './styled';

const HomePage: React.FC = () => {
	return <>
		<Helmet>
			<title>Главная - MW Marketplace</title>
		</Helmet>
		<PageWrapper>
			<h1>Главная</h1>
		</PageWrapper>
	</>
}

export default HomePage;
